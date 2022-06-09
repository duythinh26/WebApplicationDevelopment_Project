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

const img_contain = styledComponents.div`
    height: 100%;
    flex: 1;


`;

const info_contain = styledComponents.div`
    flex: 1;
    padding: 50px;

`;

const info_title = styledComponents.h1`
    font-size: 50px;

`;

const info_desc = styledComponents.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 1px;

`;

const Button = styledComponents.h1`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

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
                <Slide bg = {item.bg} key = {item.id}>
                <img_contain>
                    <img className='slider__img' src={ item.img } alt="" />
                </img_contain>
                <info_contain>
                    <info_title>{item.title}</info_title>
                    <info_desc>{item.desc}</info_desc>
                    <Button>Shopping now</Button>
                </info_contain>
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