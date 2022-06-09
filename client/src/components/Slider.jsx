import { useState } from 'react';
import styledComponents from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';

const Container = styledComponents.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    margin: auto;
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

const ImageContainer = styledComponents.div`
    height: 100%;
    flex: 1;
`;

const Image = styledComponents.img`
  height: 80%;
`;

const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 50px;
`;

const Title = styledComponents.h1`
    font-size: 50px;
`;

const Description = styledComponents.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 1px;
`;

const Button = styledComponents.button`
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
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={ slideIndex }>
                {sliderItems.map((item) => (
                    <Slide bg={ item.bg } key={ item.id }>
                    <ImageContainer>
                        <Image src={ item.img } alt="" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{ item.title }</Title>
                        <Description>{ item.desc }</Description>
                        <Button>Shopping now</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider;