import React, { useEffect, useState } from "react";
import './Hero.css';
import Scroll from "../../components/Scroll/Scroll";
import { lendingData } from "../../assets/api/api"; 

const Hero = () => {
    const [title, setTitle] = useState(""); 

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await lendingData.getTitle();
                setTitle(response?.data?.title || "Default Title");
            } catch (error) {
                console.error("Error fetching title:", error);
                setTitle("Default Title");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="hero">
            <div className="container">
                <div className="hero-cont">
                    <div className="hero-text-content">
                        <div className="hero-text">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <Scroll />
                </div>
            </div>
        </div>
    );
};

export default Hero;