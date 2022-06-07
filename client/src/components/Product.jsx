import React from 'react';
import "./css/Product.css";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Container = styledComponents.div`
    flex: 1;
    margin: 5px;
    min-width: 25%;  
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`

const Circle = styledComponents.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`

const Product = ({ item }) => {
  return (
    <div className='product__container'>
        <Circle/>
        <img className='product__img' src={item.img} alt="" />
        <div className="product__info">
            <div className="product__icon">
                <ShoppingCartOutlined/>
            </div>
            <div className="product__icon">
                <Link to={`/product/${ item._id }`}>
                <SearchOutlined/>
                </Link>
            </div>
            <div className="product__icon">
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product;