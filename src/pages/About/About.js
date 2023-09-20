import React from "react";
import './About.css';
import flag from '../../assets/images/desktop-img-202308081005431.png';
import icontr from '../../assets/images/icon-arrow-tr.svg';



const About = () =>{

return(
    <div className="about">
        <div className="about-text">
            <div className="about-text-title">
                <h2>Про <br/>Бригаду</h2>
            </div>
            <div className="about-text-conteiner">
                <p>57 бригада бере участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо</p>
                <a href="#">читати більше <img src={icontr}/></a>
            </div>
        </div>
        <div className="about-content">
            <img className="about-content-img" src={flag} alt="Flag"/>
        </div>
    </div>



)

}

export default About;

