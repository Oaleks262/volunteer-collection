import React from "react";
import "./Contact.css";


const Contact = () =>{


    return(
        <div id="contacts" className="contact-div">
            <div className="container">
                <div className="content-contact">
                    <h3>Великі серця, готові допомагати та діяти - ось що визначає нашу команду волонтерів.<br/> 
                    Наша команда вдячна за допомогу від кожного. <br/>
                    Якщо ти хочеш зробити свій вклад  у Нашу перемогу?<br/>
                    Телефонуйте чи пишіть</h3>
                
                    <div className="contact-blok">
                        <a href="tel:+380938145293" target="_blank">Телефон</a>
                        <a href="https://t.me/Yarom28" target="_blank">Telegram</a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Contact;