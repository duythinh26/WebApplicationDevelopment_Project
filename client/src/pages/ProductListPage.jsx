import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import News from '../components/News';
import Footer from '../components/Footer';
import "../components/css/ProductListPage.css"


const ProductList = () => {
  return (
    <div className='product-list__container'>
        <Announcement/>
        <Navbar/>
        <h1 className="title">Dresses</h1>
        <div className="filter__container">
            <div className="filter">
                <span className="filter__text">Filter Products:</span>
                <select>
                    <option disabled selected>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
                <select>
                    <option disabled selected>Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div className="filter">
                <span className="filter__text">Sort Products:</span>
                <select>
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </select>
            </div>
        </div>
        <Products/>
        <News/>
        <Footer/>
    </div>
  )
}

export default ProductList;