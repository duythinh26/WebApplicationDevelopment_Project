import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import "./css/Slider.css";
import styledComponents from 'styled-components';
import { sliderItems } from '../data';

const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`;

const Wrapper = styledComponents.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styledComponents.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <div className='slider__container'>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg = {item.bg}>
                <div className="slider__img-container">
                    <img className='slider__img' src={item.img} alt="" />
                </div>
                <div className="slider__info-container">
                    <h1 className="info-title">{item.title}</h1>
                    <p className="info-desc">{item.desc}</p>
                    <button className="info-button">Shopping now</button>
                </div>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction = "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </div>
  )
}

export default Slider