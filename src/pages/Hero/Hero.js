import React from "react";
import './Hero.css';
import Scroll from "../../components/Scroll/Scroll";




const Hero = () => {

  
    
return(
    <div className="hero">
        <div className="container">
            <div className="hero-cont">
        <div className="hero-text-content">
            <div className="hero-text">
                <h1>Привіт, ми проводимо збори на авто для 24-ї бригади.</h1>
            </div>
        </div>
        <Scroll/>
        </div>
      </div>
    </div>
)

};
export default Hero;