import React from "react";
import './Footer.css';
import logofooter from '../../assets/images/logo-desktop.png';


const Footer = () => {

    return(
        <div className="Footer">
            <div className="Footer-img">
                <img src={logofooter} alt="logo" />
            </div>
            <div className="Footer-block">
                <div className="Footer-conteiner">
                    <p>Політика конфіденційності </p>
                    <p>Правила користування сайтом</p>
                </div>
                <p>Розробка Baza Trainee Ukraine 2023 @ Всі права захищені</p>
            </div>



        </div>
    );

}

export default Footer;