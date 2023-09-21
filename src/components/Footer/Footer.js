import React from "react";
import './Footer.css';
import logo from "../../assets/images/logovolunteer.svg";
import polit from '../../assets/document/policy.pdf'
import rules from '../../assets/document/rules.pdf'


const Footer = () => {

    return(
        <div className="footer">
                <div className="footer-block">
            <div className="footer-block-img">
                <img src={logo} alt="logo" className="footer-img" />
            </div>
            <div className="footer-block">
                <div className="footer-conteiner">
                   <a href={polit} target="_blanck"> Політика конфіденційності </a>
                   <a href={rules} target="_blanck">Правила користування сайтом</a>
                </div>
                <p>Розробка Zvirych O. M. 2023 © Всі права захищені</p>
            </div>
            </div>
        </div>
    );
}
export default Footer;