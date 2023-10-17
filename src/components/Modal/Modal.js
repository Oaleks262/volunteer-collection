import React from "react";
import './Modal.css';
import close from '../../assets/images/icon-close.svg';

const Modal = ({ onClose }) =>{  
    const handleModalClick = (e) => {
        if (e.target.classList.contains("Modal")) {
            onClose(); 
        }
    };

    const handleButtonCloseClick = () => {
        onClose(); 
    };

    return(
        <div className="Modal" onClick={handleModalClick}>
            <div className="Modal-window">
                <div className="Modal-button">
                    <button className="Button-close" onClick={handleButtonCloseClick}><img src={close} alt="Close"className="icon-close"/></button>
                </div>    
                <div className="Modal-text">
                    <h2>Дякуємо за ваш внесок у підтримку 24-ї бригади!</h2>
                    <h2>Разом до перемоги!</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal;
