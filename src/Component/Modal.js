import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, title, year, directors, stars, plot }) => isShowing ? ReactDOM.createPortal(
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
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;