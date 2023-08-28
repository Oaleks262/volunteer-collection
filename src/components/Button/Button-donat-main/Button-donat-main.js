import React, { useState } from 'react';
import './Button-donat-main.css';
import Modal from '../../Modal/Modal';
import './Button-donat-main.css';

const ButtonMake = ({ onClick, children, href }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
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
            <button className="custom-button-main" onClick={handleClick}>
                {children}
            </button>
            {modalOpen && <Modal onClose={handleCloseModal} />}
        </div>
    );
};

export default ButtonMake;
