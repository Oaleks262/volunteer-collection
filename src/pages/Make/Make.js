import React, { useState,useEffect } from "react";
import './Make.css';
import ButtonMake from "../../components/Button/Button-donat-main/Button-donat-main";
import { lendingData } from "../../assets/api/api"; 


const Make = () => {

    const [bank, setBank] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        try {

            const response = await lendingData.getBank();
            setBank(response?.data?.bank || "Default Title");
        } catch (error) {
            console.error("Error fetching title:", error);
            setBank("Default Title");
        }
    };

    fetchData();
}, []);

    return(

        <div className="make-div">
            <div className="container">
                <div className="make">
            <h3>Ваш внесок - крок до сильнішої оборони. Допоможіть нам будувати мирне завтра для всіх разом з 24-ю бригадою.</h3>
            <ButtonMake href={bank}>Зробити донат</ButtonMake>
            </div>
            </div>
        </div>
    )


}

export default Make;