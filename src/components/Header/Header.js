import React from "react";
import './Header.css';
import { useState } from "react";
import ButtonHeader from "../Button/Button-donat-header/Button-donat-header";
import logo from "../../assets/images/logovolunteer.svg";
import menulogo from "../../assets/images/icon-menu.svg";


const Header = () => {

const [menu , setMenu] = useState(false);


return( 
  <div className="header">
    <div className="container">
    <div className="header-desktop">
      <img src={logo} alt="logo" />
      <div className="navbar">
        <div className="nav">
          <a href="#" >про бригаду</a>
          <a href="#" >наші проекти</a>
        </div>
        <div className="button-header">
          <ButtonHeader href={'https://send.monobank.ua/jar/4B1mQWmGVS'}>Зробити донат</ButtonHeader>
        </div>
      </div>
    </div>
    <div className="header-mobile">
      <img src={logo} alt="logo" className="header-mobile-img"/>

      <button><img src={menulogo} alt="logo"/></button>
    </div>
    </div>
    </div>
);

}

export default Header