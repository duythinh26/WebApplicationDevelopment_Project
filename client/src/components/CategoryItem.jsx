import React from 'react'
import "./css/CategoryItem.css"

const CategoryItem = ({item}) => {
  return (
    <div className='category-item__container'>
        <img className='category-item__img' src={item.img} alt="" />
        <div className="category-item__info-container">
            <h1 className="info__title">{item.title}</h1>
            <button className="info__button">Buy Now!!</button>
        </div>
    </div>
  )
}

export default CategoryItem