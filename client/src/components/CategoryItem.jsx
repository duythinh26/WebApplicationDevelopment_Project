import React from 'react'
import { Link } from 'react-router-dom'
import "./css/CategoryItem.css"
import styledComponents from "styled-components";

const Container = styledComponents.div`

    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;

`;
const Title = styledComponents.h1`

    color: #fff;
    margin-bottom: 20px;

`;

const Info_items = styledComponents.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styledComponents.button`

    border: none;
    padding: 10px;
    background-color: #fff;
    color: gray;
    cursor: pointer;
    font-weight: normal;

`;

const img = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to = { `/products/${ item.cat }` }>
        <img className='category-item__img' src={item.img} alt="" />
        <Info_items>
            <Title>{ item.title }</Title>
            <Button>Buy Now!!</Button>
        </Info_items>
      </Link>
    </Container>
  )
}

export default CategoryItem;