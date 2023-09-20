import React from "react";
import './Make.css';
import ButtonMake from "../../components/Button/Button-donat-main/Button-donat-main";


const Make = () => {
    return(

        <div className="make">
            <h3>Ваш внесок - крок до сильнішої оборони. Допоможіть нам будувати мирне завтра для всіх разом з 24-ю бригадою.</h3>
            <ButtonMake href={'https://send.monobank.ua/jar/4B1mQWmGVS'}>Зробити донат</ButtonMake>
        </div>
    )


}

export default Make;