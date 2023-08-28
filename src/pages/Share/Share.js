import React from "react";
import './Share.css';
import iconbr from '../../assets/images/icon-arrow-br.svg';



const Share = () => {

const Facebook = <a href=""></a>

    return (
        <div className="Share">
            <div className="Share-title">
                <h2>Допоможи<br/>
                    дізнатися<br/>
                    іншим про<br/>
                    цей збір
                </h2>
                <div className="Share-line">

                </div>
            </div>
            <div className="Share-button">
            <a href="#" target="_blanck"><button>Facebook<img src={iconbr}/></button></a>
            <a href="#" target="_blanck"><button>Linkedin<img src={iconbr}/></button></a>
            <a href="#" target="_blanck"><button>Telegram<img src={iconbr}/></button></a>
            <a href="#" target="_blanck"><button>Viber<img src={iconbr}/></button></a>
            </div>
        </div>
    )
}


export default Share;
