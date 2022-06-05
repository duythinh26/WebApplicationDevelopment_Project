import React from 'react'
import styledComponents from 'styled-components';
import "../components/css/ProductPage.css"
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const FilterColor = styledComponents.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const ProductPage = () => {
  return (
    <div className='product-page__container'>
      <Announcement/>
      <Navbar/>
      <div className="product-page__wrapper">
        <div className="img__container">
          <img className='productpage__img' src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
         <div className="info__container">
          <h1 className="product__info-title">
            Denim Jumpsuit  
          </h1>
          <p className="info_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="price">$30</span>
          <div className="product--filter__container">
            <div className="product__filter">
              <span className="filter__title">Color</span>
              <FilterColor color='black'></FilterColor>
              <FilterColor color='darkblue'></FilterColor>
              <FilterColor color='gray'></FilterColor>
            </div>
            <div className="product__filter">
              <span className="filter__title">Size</span>
              <select name="" id="" className="filter__size">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
            </div>
          </div>
          <div className="add-to-cart__container">
            <div className="amount__container">
              <Remove style={{ cursor: "pointer" }}/>
              <span className="amount">1</span>
              <Add style={{ cursor: "pointer" }}/>
            </div>
            <button className="add__button">Add to cart</button>
          </div>
        </div>
      </div>
      <News/>
      <Footer/>
    </div>
  )
}

export default ProductPage;