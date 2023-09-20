import React, { Component } from "react";
import './ScrollPartners.css';
import noname from '../../assets/images/desktop-image-2.png';

class ScrollPartners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            isDragging: false,
            dragStartX: 0,
            dragDeltaX: 0,
        };
    }

    handleMouseDown = (event) => {
        this.setState({
            isDragging: true,
            dragStartX: event.clientX || event.touches[0].clientX,
        });
    };

    handleMouseMove = (event) => {
        if (this.state.isDragging) {
            const clientX = event.clientX || event.touches[0].clientX;
            const dragDeltaX = clientX - this.state.dragStartX;
            this.setState({ dragDeltaX });
        }
    };

    handleMouseUp = () => {
        if (this.state.isDragging) {
            if (this.state.dragDeltaX > 50) {
                // Прокручування вліво
                this.prevImage();
            } else if (this.state.dragDeltaX < -50) {
                // Прокручування вправо
                this.nextImage();
            }
            this.setState({
                isDragging: false,
                dragStartX: 0,
                dragDeltaX: 0,
            });
        }
    };

    prevImage = () => { 
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + 4) % 4, 
        }));
    };

    nextImage = () => { 
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

        return (
            <div
                className="partners-scroll-container"
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
                onTouchStart={this.handleMouseDown}
                onTouchMove={this.handleMouseMove}
                onTouchEnd={this.handleMouseUp}
            >
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

