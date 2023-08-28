import React from "react";
import'./Button-project.css';

const ButtonProject = ({ onClick, children, href }) => {
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
      <button className="custom-button-project" onClick={handleClick}>
        {children}
      </button>

    );
  };
  
  export default ButtonProject;