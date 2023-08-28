import React from 'react';
import './Button-donat-main.css'

const ButtonMake = ({ onClick, children, href }) => {
    const handleClick = (e) => {
      e.preventDefault();
      if (href) {
        window.open(href, '_blank', 'noopener noreferrer');
      }
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <button className="custom-button-main" onClick={handleClick}>
        {children}
      </button>
    );
  };
  
  export default ButtonMake;