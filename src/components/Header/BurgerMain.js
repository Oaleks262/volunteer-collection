import React from "react";
import './BurgerMain.css';
import ButtonHeader from "../Button/Button-donat-header/Button-donat-header";
import logo from "../../assets/images/logovolunteer.svg";

const BurgerMain = () => {

    
    return( 
      <div className="burger-main">
        <div className="container">
        <div className="burger-main-cont">
          <img src={logo} alt="logo" />
          <div className="burger-navbar">
            <div className="burger-nav">
              <a href="#" >Про бригаду</a>
              <a href="https://t.me/+HCcTIiF8PR1jZjBi" target="_blanck" >Наш Telegram</a>
            </div>
            <div className="burger-button">
             <ButtonHeader href={'https://send.monobank.ua/jar/997DGaGRnq'}>Зробити донат</ButtonHeader> 
            </div>
          </div>
        </div>
        </div>
      </div>
    );
    
    }
    
    export default BurgerMain