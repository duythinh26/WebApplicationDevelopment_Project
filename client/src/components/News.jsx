import React from 'react';
import { Send } from '@material-ui/icons';
import "./css/News.css"

const News = () => {
  return (
    <div className='news__container'>
        <h1 className="news__title">News</h1>
        <div className="news__desc">Get timely updates from your favorite products.</div>
        <div className="news__input-container">
            <input type="text" placeholder='Your email' />
            <button className="input__button">
                <Send/>
            </button>
        </div>
    </div>
  )
}

export default News;