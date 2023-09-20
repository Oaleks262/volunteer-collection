import React from "react";
import './Hero.css';
import Scroll from "../../components/Scroll/Scroll";




const Hero = () => {

  
    
return(
    <div className="hero">
        <div className="hero-text-content">
            <div className="hero-text">
                <h1>Привіт, ми проводимо збори для 24-ї бригади. Великі – та дуже важливі</h1>
            </div>
        </div>
        <Scroll/>
      </div>
      
)

};
export default Hero;