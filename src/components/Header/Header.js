import React from "react";
import './Header.css';
import { useState } from "react";
import ButtonHeader from "../Button/Button-donat-header/Button-donat-header";
import logo from "../../assets/images/logo-desktop.png";
import menulogo from "../../assets/images/icon-menu.svg";



const Header = () => {

const [menu , setMenu] = useState(false);


const menuClick = () => {
  setMenu(!menu);
};

return( 
    <div className="Header">
      <img src={logo} alt="logo" />
      <div className="Navbar">
        <div className="Nav">
          <a href="#">про бригаду</a>
          <a href="#">наші проекти</a>
        </div>
        <div className="Button-header">
          <p><span>ua</span>/<span>eng</span></p>
          <ButtonHeader href={'https://send.monobank.ua/jar/4B1mQWmGVS'}>Зробити донат</ButtonHeader>
        </div>
      </div>
      
     
    
    </div>
);

}

export default Header