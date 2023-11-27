import React, { useState,useEffect } from "react";
import './Header.css';
import ButtonHeader from "../Button/Button-donat-header/Button-donat-header";
import logo from "../../assets/images/logovolunteer.svg";
import menulogo from "../../assets/images/icon-menu.svg";
import BurgerMain from "./BurgerMain";
import { lendingData } from "../../assets/api/api"; 


const Header = () => {
  const [menu, setMenu] = useState(false);
  const [bank, setBank] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        try {

            const response = await lendingData.getBank();
            setBank(response?.data?.bank || "Default Title");
        } catch (error) {
            console.error("Error fetching title:", error);
            setBank("Default Title");
        }
    };

    fetchData();
}, []);

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
              <a href="/#contacts">Контакти</a>
              <a href="https://t.me/+HCcTIiF8PR1jZjBi" target="_black" >Наш Telegram</a>
            </div>
            <div className="button-header">
              <ButtonHeader href={bank}>Зробити донат</ButtonHeader>
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