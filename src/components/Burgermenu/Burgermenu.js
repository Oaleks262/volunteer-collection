import { useState } from 'react';
import React from "react";
import closeicon from '../../assets/images/icon-close.svg';
import './Burgermenu.css';

const Burgermenu = () => {

return(
    <div className="burgermenu">
        <div className="line-burgermenu-close">
            <img src={closeicon} alt="close"/>
        </div>
        <div className='menuburger'>
            <a href='#'>Про бригаду</a>
            <a href='#'>Наші проекти</a>
            <button>Зробити донат</button>
        </div>
    </div>
)


}


export default Burgermenu;