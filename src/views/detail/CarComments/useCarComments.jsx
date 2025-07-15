import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeToAuction, addCommentToAuction } from '../../../utils/firebaseHelpers';
import { startEnviarComentario } from '../../../redux/features/auction/thunks';

export const useCarComments = (articuloID) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState({
    userName: '',
    userEmail: '',
    comment: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);
  const { user } = useSelector(state => state.userReducer);
  const { comentarios } = useSelector(state => state.auctionReducer);
  const dispatch = useDispatch();

  // Load real comments from Firebase
  useEffect(() => {
    if (!articuloID) return;

    const unsubscribe = subscribeToAuction(articuloID, (auctionData) => {
      const firebaseComments = auctionData.comentarios || [];
      
      // Transform Firebase comments to component format
      const transformedComments = firebaseComments.map((comment, index) => ({
        id: index + 1,
        userName: comment.NickName || comment.Nickname || 'Usuario Anónimo',
        userImage: "assets/img/blog/com-1.jpg",
        date: new Date(comment.Fecha).toLocaleDateString('es-ES', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        rating: comment.Rating || 5,
        comment: comment.Comentario
      }));
      
      setComments(transformedComments);
    });

    return () => unsubscribe();
  }, [articuloID]);

  const handleRatingClick = (rating) => {
    setNewComment({ ...newComment, rating });
  };

  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    // Validate user authentication
    if (!user?.email) {
      alert('Inicia sesión antes de enviar un comentario');
      return;
    }
    
    // Validate comment content
    if (!newComment.comment.trim() || newComment.comment.length === 0) {
      alert('Escribe un comentario');
      return;
    }
    
    if (newComment.rating === 0) {
      alert('Selecciona una calificación');
      return;
    }
    
    setLoading(true);
    
    try {
      // Prepare comment data
      const commentData = {
        comentario: newComment.comment.trim(),
        torreID: articuloID,
        usuarioID: user.usuarioID || user.uid,
        nickname: user.nickname || user.email.split('@')[0],
        rating: newComment.rating
      };
      
      // Submit to API first
      await dispatch(startEnviarComentario({
        comentario: commentData.comentario,
        torreID: commentData.torreID
      }));
      
      // Then add to Firebase for real-time updates
      await addCommentToAuction(articuloID, {
        comentario: commentData.comentario,
        usuarioID: commentData.usuarioID,
        nickname: commentData.nickname,
        rating: commentData.rating
      });
      
      // Reset form
      setNewComment({ userName: '', userEmail: '', comment: '', rating: 0 });
      setHoverRating(0);
      
    } catch (error) {
      console.error('Error enviando comentario:', error);
      alert('Error al enviar comentario. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
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