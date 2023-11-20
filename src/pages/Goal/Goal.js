import React, { useEffect, useState } from "react";
import './Goal.css';
import { lendingData } from "../../assets/api/api"; 

const Goal = () =>{

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
        <div className="goal">
            <div className="container">
            <div className="goal-cont">
            <div className="goal-title">
                <h2>Наша <br/>мета</h2>
            </div>
            <div className="goal-text">
                <p>{about}</p>
                </div>
            </div>
            </div>
        </div>


    )



}

export default Goal;