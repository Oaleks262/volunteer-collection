import React, { Component } from "react";
import './ScrollPartners.css';
import iconleft from '../../assets/images/icon-arrow-left.svg';
import iconright from "../../assets/images/icon-arrow-righ.svg" // Виправлено помилку в імені файла
import noname from '../../assets/images/desktop-image-2.png';

class ScrollPartners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    prevsImage = () => { 
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + 4) % 4, 
        }));
    };

    nexstImage = () => { 
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % 4, 
        }));
    };

    render() {
        const partner = [
            noname,
            noname,
            noname,
            noname
        ];

        const PrevsButton = ({ onClick }) => (
            <button onClick={onClick} className="scroll-button prev-button">
                <img src={iconleft} alt="Previous" className="button-icon" />
            </button>
        );

        const NextsButton = ({ onClick }) => (
            <button onClick={onClick} className="scroll-button next-button">
                <img src={iconright} alt="Next" className="button-icon" />
            </button>
        );

        return (
            <div className="partners-scroll-container">
                <div className="partners-number">
                    <PrevsButton onClick={this.prevsImage} /> 
                    <NextsButton onClick={this.nexstImage} /> 
                </div>
                <div className="partners-scroll-content" style={{ transform: `translateX(-${this.state.currentIndex * (100 / partner.length)}%)` }}>
                    {partner.map((image, index) => (
                        <a href="#" key={index}>
                            <div className={`noname ${index === this.state.currentIndex ? 'active' : ''}`}>
                                <div className="noname-logo">
                                    <img src={image} alt={`Image ${index + 1}`} />
                                    <p>Назва <br />
                                        Проекту</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ScrollPartners;