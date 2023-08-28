import React from "react";
import './Partners.css';
import baza from '../../assets/images/logo-baza.png';
import noname from '../../assets/images/desktop-image-2.png';



const Partners = () =>{

return(
    <div className="Partners">
    <div className="Partners-title">
        <h2>Наші<br/>Партнери</h2>
        <div className="Partners-line">
        </div>
    </div>
    <div className="Partner-content">

        
    <a><div className="baza">
                <div className="baza-logo">
                    <img src={baza}/>
                    <p>Baza Tarinee <br/>
                    Ukraine</p>
                </div>
          </div></a>
          <a><div className="noname">
                <div className="noname-logo">
                    <img src={noname}/>
                    <p>Назва <br/>
                    Проекту</p>
                </div>
          </div></a>
          <a><div className="noname">
                <div className="noname-logo">
                    <img src={noname}/>
                    <p>Назва <br/>
                    Проекту</p>
                </div>
          </div></a>
          <a><div className="noname">
                <div className="noname-logo">
                    <img src={noname}/>
                    <p>Назва <br/>
                    Проекту</p>
                </div>
          </div></a>
          <a><div className="noname">
                <div className="noname-logo">
                    <img src={noname}/>
                    <p>Назва <br/>
                    Проекту</p>
                </div>
          </div></a>
          
          
    </div>


</div>
);
    




}

export default Partners ;