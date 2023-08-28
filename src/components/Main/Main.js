import React from "react";
import './Main.css';
import Hero from "../../pages/Hero/Hero";
import About from "../../pages/About/About";
import Goal from "../../pages/Goal/Goal";
import Make from "../../pages/Make/Make";
import Projects from "../../pages/Projects/Projects";
import Partners from "../../pages/Partners/Partners";
import Share from "../../pages/Share/Share";





const Main = () =>{

return(
    <div className="Main">
        <Hero/>
        <About/>
        <Goal/>
        <Make/>
        <Projects/>
        <Partners/>
        <Share/>
    </div>
)

}

export default Main;