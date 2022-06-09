import React from 'react';
import { Send } from '@material-ui/icons';
import "./css/News.css"
import styledComponents from 'styled-components';

const news_contain = styledComponents.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styledComponents.h1`

    font-size: 50px;
    font-weight: normal;
    margin-bottom: 20px;
`;

const Desc = styledComponents.div`
    font-size: 20px;
    font-weight: 300px;
    margin-bottom: 20px;

`;

const input_contain = styledComponents.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`;

const Button = styledComponents.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
    cursor: pointer;

`;

const News = () => {
  return (
    <news_contain>
        <Title>News</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <input_contain>
            <input className='email__input' type="text" placeholder='Your email' />
            <Button>
                <Send/>
            </Button>
        </input_contain>
    </news_contain>
  )
}

export default News;