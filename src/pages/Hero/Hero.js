import React from "react";
import './Hero.css';
import Scroll from "../../components/Scroll/Scroll";




const Hero = () => {

  
    
return(
    <div className="hero">
        <div className="hero-text-content">
            <div className="hero-text">
                <h1>Привіт, ми проводимо збори для 57-ї бригади. Невеликі – але не менш важливі</h1>
            </div>
        </div>
        <Scroll/>
      </div>
      
)

};
export default Hero;