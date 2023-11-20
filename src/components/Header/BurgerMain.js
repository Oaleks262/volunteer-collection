import React, { useState,useEffect } from "react";
import './BurgerMain.css';
import ButtonHeaderMobile from '../Button/Button-donat-mobile/Button-donat-mobile';
import logo from "../../assets/images/logovolunteer.svg";
import { lendingData } from "../../assets/api/api"; 
const BurgerMain = () => {

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
            <ButtonHeaderMobile href={bank}>Зробити донат</ButtonHeaderMobile> 
            </div>
          </div>
        </div>
        </div>
      </div>
    );
    
    }
    
    export default BurgerMain