import React from 'react';
import image from './images/1.png';
import './index.css';

const New = () => {
  return (
    <div className="new-us">
    <div className="new-text">
        <h1>WHAT’S NEW</h1>
        <h2><b>PLACE YOUR TITLE HERE</b></h2>
      <button className='button1234'>
            Shop Now<i className="fa fa-arrow-right"></i>
    </button>
    </div>
      <div className="new-image">
        <img src={image} alt="New Image" />
      </div>
    </div>
  );
};

export default New;