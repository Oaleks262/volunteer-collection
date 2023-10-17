import React, { useState } from "react";
import './Header.css';
import ButtonHeader from "../Button/Button-donat-header/Button-donat-header";
import logo from "../../assets/images/logovolunteer.svg";
import menulogo from "../../assets/images/icon-menu.svg";
import BurgerMain from "./BurgerMain";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
    <div className="header">
      <div className="container">
        <div className="header-desktop">
          <img className="header-desktop-img" src={logo} alt="logo" />
          <div className="navbar">
            <div className="nav">
            <a href="#" >Про бригаду</a>
              <a href="https://t.me/+HCcTIiF8PR1jZjBi" >Наш telegram</a>
            </div>
            <div className="button-header">
              <ButtonHeader href={'https://send.monobank.ua/jar/997DGaGRnq'}>Зробити донат</ButtonHeader>
            </div>
          </div>
        </div>
        <div className="header-mobile">
          <img src={logo} alt="logo" className="header-mobile-img"/>
          <button onClick={toggleMenu}><img src={menulogo} alt="logo"/></button>
        </div>
      </div>
    </div>
    {menu && <BurgerMain />}
    </>
  );
}

export default Header;