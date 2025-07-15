import React from 'react';
import { useSelector } from 'react-redux';
import { useCarComments } from './useCarComments.jsx';
import carCommentsData from './carCommentsData.json';

const CarComments = ({ car }) => {
  const { user } = useSelector(state => state.userReducer);
  const {
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
  } = useCarComments(car?.torreID);

  const { labels } = carCommentsData;
  const isAuthenticated = user?.email;

  return (
    <div className="car-single-review">
      <div className="blog-comments">
        <h3>{labels.comments} ({comments.length})</h3>
        {loading && (
          <div className="text-center my-3">
            <div className="loader-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <div className="blog-comments-wrapper">
          {comments.map((comment) => (
            <div key={comment.id} className="blog-comments-single">
              <img src={comment.userImage} alt="thumb" />
              <div className="blog-comments-content">
                <h5>{comment.userName}</h5>
                <div className="mb-2">
                  <div className="car-single-rating d-inline-block me-3">
                    {renderStars(comment.rating)}
                  </div>
                  <span><i className="far fa-clock"></i> {comment.date}</span>
                </div>
                <p>{comment.comment}</p>
                <a href="#"><i className="far fa-reply"></i> {labels.reply}</a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-comments-form">
          <h3>{labels.leaveComment}</h3>
          {!isAuthenticated ? (
            <div className="alert alert-warning">
              <i className="fas fa-exclamation-triangle me-2"></i>
              Inicia sesión para poder comentar y calificar este vehículo.
            </div>
          ) : (
            <form onSubmit={handleSubmitComment}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group car-review-rating">
                    <label>{labels.yourRating}</label>
                    <div>
                      {renderRatingInput()}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder={labels.yourComment}
                      value={newComment.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="theme-btn" disabled={loading}>
                    {loading ? (
                      <div className="loader-ripple me-2" style={{ transform: 'scale(0.3)' }}>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      <i className="far fa-paper-plane"></i>
                    )}
                    {labels.submitComment}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarComments;