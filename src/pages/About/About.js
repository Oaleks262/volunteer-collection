import React from "react";
import './About.css';
import flag from '../../assets/images/desktop-img-202308081005431.png';
import icontr from '../../assets/images/icon-arrow-tr.svg';



const About = () =>{

return(
    <div className="About">
        <div className="About-text">
            <div className="About-text-title">
                <h2>Про <br/>Бригаду</h2>
                <div className="About-line">

                </div>
            </div>
            <div className="About-text-conteiner">
                <p>57 бригада бере участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і ремонт машин, гума на колеса тощо</p>
                <a href="#">читати більше <img src={icontr}/></a>
            </div>
        </div>
        <div className="About-content">
            <img src={flag} alt="Flag"/>
        </div>
    </div>



)

}

export default About;

