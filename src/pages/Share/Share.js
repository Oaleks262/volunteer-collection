import React from "react";
import './Share.css';
import iconbr from '../../assets/images/icon-arrow-br.svg';

const Share = () => {
    const shareURL = "https://volunteer-community.info/";
const shareText = "Слава Україні!
Підтримай 24-ї бригаду яка знаходиться у найзапекліших куточках нашої країни захищаючи нашу безпеку ризикуючи своїм життям.
Ваша допомога  дозволить надати нашим військовим необхідне обладнання,забезпечити необхідні умови для успішного виконання важливих завдань.";

const shareOnFacebook = () => {
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookShareURL, 'Поділитися на Facebook', 'width=600,height=400');
};

const shareOnLinkedin = () => {
    const linkedinShareURL = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareURL)}&title=${encodeURIComponent(shareText)}`;
    window.open(linkedinShareURL, 'Поділитися на Linkedin', 'width=600,height=400');
};

const shareOnTelegram = () => {
    const telegramShareURL = `https://t.me/share/url?url=${encodeURIComponent(shareURL)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramShareURL, 'Поділитися на Telegram', 'width=600,height=400');
};

const shareOnViber = () => {
    const viberShareURL = `viber://forward?text=${encodeURIComponent(shareText + " " + shareURL)}`;
    window.location.href = viberShareURL;
};


    return (
        <div className="share">
            <div className="container ">
                <div className="share-block">
            <div className="share-title">
                <h2>Допоможи<br/>
                    дізнатися<br/>
                    іншим про<br/>
                    цей збір
                </h2>
            </div>
            <div className="share-button">
                <button onClick={shareOnFacebook}>Facebook<img src={iconbr} alt="Facebook Icon" /></button>
                <button onClick={shareOnLinkedin}>Linkedin<img src={iconbr} alt="Linkedin Icon" /></button>
                <button onClick={shareOnTelegram}>Telegram<img src={iconbr} alt="Telegram Icon" /></button>
                <button onClick={shareOnViber}>Viber<img src={iconbr} alt="Viber Icon" /></button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Share;
