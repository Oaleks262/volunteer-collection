import './Button-donat-header.css';
import React from 'react';


const ButtonHeader = ({ onClick, children, href }) => {
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
      <button className="custom-button" onClick={handleClick}>
        {children}
      </button>
    );
  };
  
  export default ButtonHeader;