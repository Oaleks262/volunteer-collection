import React, { useEffect, useState } from "react";
import './About.css';
import flag from '../../assets/images/flags.jpg';
import icontr from '../../assets/images/icon-arrow-tr.svg';
import { lendingData } from "../../assets/api/api"; 


const About = () =>{

const[about, setAbout]=useState('');

useEffect(() => {
    const fetchData = async () => {
        try {

            const response = await lendingData.getAbout();
            setAbout(response?.data?.about || "Default Title");
        } catch (error) {
            console.error("Error fetching title:", error);
            setAbout("Default Title");
        }
    };

    fetchData();
}, []);

return(
    <div className="about">
        <div className="container ">
        <div className="about-cont">
        <div className="about-text">
            <div className="about-text-title">
                <h2>Про <br/>Бригаду</h2>
            </div>
            <div className="about-text-conteiner">
                <p>{about}</p>
                <a href="https://uk.wikipedia.org/wiki/24-%D1%82%D0%B0_%D0%BE%D0%BA%D1%80%D0%B5%D0%BC%D0%B0_%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D1%96%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B8%D0%B3%D0%B0%D0%B4%D0%B0_%28%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0%29" target="_blanck">читати більше <img src={icontr} alt="icon"/> </a>
            </div>
        </div>
        <div className="about-content">
            <img className="about-content-img" src={flag} alt="Flag"/>
        </div>
        </div>
    </div>
    </div>


)

}

export default About;

