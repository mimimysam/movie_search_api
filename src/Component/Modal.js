import React from 'react';
import ReactDOM from 'react-dom';
import ThumbRating from './ThumbRating';

const Modal = ({ isShowing, hide, id, title, year, image, directors, stars, plot, thumbsUpCount, thumbsDownCount }) => isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <h2>{title}</h2>
          <h2>{year}</h2>
          <p>Directors: {directors}</p>
          <p>Cast: {stars}</p>
          <p>Plot: {plot}</p>
          <ThumbRating 
            id={id}
            title={title}
            image={image}
            thumbsUpCount={thumbsUpCount}
            thumbsDownCount={thumbsDownCount}
            />
      </div>
    </div>
  </React.Fragment>, document.body

) : null;

export default Modal;