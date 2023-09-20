import React from "react";
import './Partners.css';
import ScrollPartners from "../../components/ScrollPartners/ScrolParthers";



const Partners = () =>{

return(
    <div className="partners">
    <div className="partners-title">
        <h2>Наші<br/>Партнери</h2>
    </div>
    <div className="partner-content">
        <ScrollPartners/>
          
          
    </div>


</div>
);
    




}

export default Partners ;