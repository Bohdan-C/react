import React from 'react';

const Modal = ({ hideModal, show, url }) => {
  const name = show ? 'Overlay' : 'd-none';
  return (
    <div
      className={name}
      onClick={e => {
        if (e.target.nodeName !== 'IMG') {
          hideModal();
        }
      }}
    >
      <div className="Modal">
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default Modal;
