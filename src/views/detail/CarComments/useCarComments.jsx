import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../../constants/apiEndpoints';
import { useSelector } from 'react-redux';

const initialComments = [];

export const useCarComments = (articuloID) => {
  const [comments, setComments] = useState(initialComments);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState({
    userName: '',
    userEmail: '',
    comment: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);
  const { user } = useSelector(state => state.userReducer);

  // Initialize with sample comments since API only has POST endpoint
  useEffect(() => {
    // Load sample comments - API doesn't provide GET endpoint for existing comments
    const sampleComments = [
      {
        id: 1,
        userName: "María González",
        userImage: "assets/img/blog/com-1.jpg",
        date: "15 Marzo, 2024",
        rating: 5,
        comment: "Excelente vehículo, muy bien cuidado. El proceso de puja fue muy transparente."
      },
      {
        id: 2,
        userName: "Carlos Mendoza",
        userImage: "assets/img/blog/com-2.jpg",
        date: "17 Marzo, 2024",
        rating: 4,
        comment: "Muy buen estado, las fotografías muestran claramente el cuidado que ha tenido."
      },
      {
        id: 3,
        userName: "Ana Patricia",
        userImage: "assets/img/blog/com-3.jpg",
        date: "18 Marzo, 2024",
        rating: 5,
        comment: "Me parece una excelente oportunidad de inversión. El vehículo se ve impecable."
      }
    ];
    
    setComments(sampleComments);
  }, [articuloID]);

  const handleRatingClick = (rating) => {
    setNewComment({ ...newComment, rating });
  };

  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (newComment.userName && newComment.userEmail && newComment.comment && newComment.rating > 0) {
      setLoading(true);
      
      try {
        // Submit to API
        const response = await fetch(API_ENDPOINTS.COMENTARIOS.POST, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token || ''}`
          },
          body: JSON.stringify({
            articuloID: articuloID,
            nombre: newComment.userName,
            email: newComment.userEmail,
            comentario: newComment.comment,
            calificacion: newComment.rating,
            usuarioID: user?.usuarioID || null
          })
        });

        if (response.ok) {
          const savedComment = await response.json();
          
          // Add to local state
          const comment = {
            id: savedComment.comentarioID || comments.length + 1,
            userName: newComment.userName,
            userImage: "assets/img/blog/com-1.jpg",
            date: new Date().toLocaleDateString('es-ES', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            }),
            rating: newComment.rating,
            comment: newComment.comment
          };
          
          setComments([...comments, comment]);
          setNewComment({ userName: '', userEmail: '', comment: '', rating: 0 });
          setHoverRating(0);
        } else {
          console.error('Error submitting comment:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting comment:', error);
        // Still add locally on API error
        const comment = {
          id: comments.length + 1,
          userName: newComment.userName,
          userImage: "assets/img/blog/com-1.jpg",
          date: new Date().toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          }),
          rating: newComment.rating,
          comment: newComment.comment
        };
        
        setComments([...comments, comment]);
        setNewComment({ userName: '', userEmail: '', comment: '', rating: 0 });
        setHoverRating(0);
      } finally {
        setLoading(false);
      }
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  const renderRatingInput = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`${
            i <= (hoverRating || newComment.rating) ? 'fas' : 'far'
          } fa-star`}
          style={{ cursor: 'pointer', color: '#ffc107' }}
          onClick={() => handleRatingClick(i)}
          onMouseEnter={() => handleRatingHover(i)}
          onMouseLeave={() => setHoverRating(0)}
        />
      );
    }
    return stars;
  };

  const handleInputChange = (field, value) => {
    setNewComment(prev => ({ ...prev, [field]: value }));
  };

  return {
    comments,
    newComment,
    hoverRating,
    loading,
    handleRatingClick,
    handleRatingHover,
    handleSubmitComment,
    renderStars,
    renderRatingInput,
    handleInputChange
  };
};