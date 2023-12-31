import React from "react";
import { Component } from "react";
import './Scroll.css'
import heroimg1 from '../../assets/images/desktop-olena-unsplash-um-9-wp-lv-wvm.png';
import heroimg2 from '../../assets/images/desktop-image-56.png';
import heroimg3 from '../../assets/images/desktop-img-47941.png';
import heroimg4 from '../../assets/images/photo1.jpg';
import heroimg5 from '../../assets/images/photo2.jpg';
import heroimg6 from '../../assets/images/photo3.jpg';
import heroimg7 from '../../assets/images/photo4.jpg';
import heroimg8 from '../../assets/images/photo5.jpg';
import heroimg9 from '../../assets/images/photo6.jpg';
import iconleft from '../../assets/images/icon-arrow-left.svg';
import iconright from "../../assets/images/icon-arrow-righ.svg";


class Scroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
      };
    }
  
    prevImage = () => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex - 1 + 9) % 9,
      }));
    };
  
    nextImage = () => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % 9,
      }));
    };
  
    render() {
      const images = [
        heroimg1,
        heroimg2,
        heroimg3,
        heroimg4,
        heroimg5,
        heroimg6,
        heroimg7,
        heroimg8,
        heroimg9
      ];
      const currentImage = images[this.state.currentIndex];
  
      const formattedIndex = (this.state.currentIndex + 1).toString().padStart(2, '0');
      const totalImages = images.length.toString().padStart(2, '0');
  
      const PrevButton = ({ onClick }) => (
        <button onClick={onClick} className="scroll-button prev-button">
          <img src={iconleft} alt="Previous" className="button-icon" />
        </button>
      );
      
      const NextButton = ({ onClick }) => (
        <button onClick={onClick} className="scroll-button next-button">
          <img src={iconright} alt="Next" className="button-icon" />
        </button>
      );
      
  
      return (
        
        <div className="hero-scroll-container">
            <div className="hero-number">
                {`${formattedIndex} - ${totalImages}`}
                <PrevButton onClick={this.prevImage} />
                <NextButton onClick={this.nextImage} />
            </div>
          <div className="hero-scroll-content" style={{ transform: `translateX(-${this.state.currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    }
  }

  

    export default Scroll;