import React from 'react';
import "./css/Product.css";
import styledComponents from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

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
                <SearchOutlined/>
            </div>
            <div className="product__icon">
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product;