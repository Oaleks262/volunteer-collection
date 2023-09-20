import React from "react";
import './Footer.css';
import logofooter from '../../assets/images/logo-desktop.png';
import polit from '../../assets/document/policy.pdf'
import rules from '../../assets/document/rules.pdf'


const Footer = () => {

    return(
        <div className="Footer">
            <div className="Footer-img">
                <img src={logofooter} alt="logo" />
            </div>
            <div className="Footer-block">
                <div className="Footer-conteiner">
                   <a href={polit} target="_blanck"> Політика конфіденційності </a>
                   <a href={rules} target="_blanck">Правила користування сайтом</a>
                </div>
                <p>Розробка Zvirych O. M. 2023 © Всі права захищені</p>
            </div>



        </div>
    );

}

export default Footer;