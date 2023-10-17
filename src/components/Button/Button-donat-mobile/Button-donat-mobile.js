import './Button-donat-mobile.css';
import React from 'react';
import Modal from '../../Modal/Modal';
import { useState } from 'react';

const ButtonHeaderMobile = ({ onClick, children, href }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e) => {
      if (href) {
          window.open(href, '_blank', 'noopener noreferrer');
      }
      if (onClick) {
          onClick();
      }
      setModalOpen(true);
  };

  const handleCloseModal = () => {
      setModalOpen(false);
  };

  return (
      <div>
          <button className="custom-button-mobile" onClick={handleClick}>
              {children}
          </button>
          {modalOpen && <Modal onClose={handleCloseModal} />}
      </div>
  );
};

export default ButtonHeaderMobile;
