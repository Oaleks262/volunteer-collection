import React from "react";
import './Main.css';
import Hero from "../../pages/Hero/Hero";
import About from "../../pages/About/About";
import Goal from "../../pages/Goal/Goal";
import Make from "../../pages/Make/Make";
import Projects from "../../pages/Projects/Projects";
import Partners from "../../pages/Partners/Partners";
import Share from "../../pages/Share/Share";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';




const Main = () =>{

return(
    <div className="main">
        <div className="container">
        <Header/>
        <Hero/>
        <About/>
        <Goal/>
        <Make/>
        <Projects/>
        <Partners/>
        <Share/>
        {/* <Footer/> */}
        </div>
    </div>
)

}

export default Main;