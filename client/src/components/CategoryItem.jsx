import React from 'react'
import { Link } from 'react-router-dom'
import "./css/CategoryItem.css"

const CategoryItem = ({ item }) => {
  return (
    <div className='category-item__container'>
      <Link to = { `/products/${ item.cat }` }>
        <img className='category-item__img' src={item.img} alt="" />
        <div className="category-item__info-container">
            <h1 className="info__title">{ item.title }</h1>
            <button className="info__button">Buy Now!!</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem;