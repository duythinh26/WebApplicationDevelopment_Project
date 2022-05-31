import React from 'react'
import "./css/Products.css"
import { popularProducts } from "../data"
import Product from './Product'

const Products = () => {
  return (
    <div className='products__container'>
        {popularProducts.map(item => (
            <Product item = {item} key = {item.id}></Product>
        ))}
    </div>
  )
}

export default Products;