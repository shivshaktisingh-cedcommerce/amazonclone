import React from 'react'
import './Product.css';
import {Link} from 'react-router-dom';

export const Product = ({id,title,image,rating}) => {
  return (
    <>
    <div className='product'>
        <div className='product-info'>
            <h2>{title}</h2>
            {/* <div className='product_rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <p>*</p>
                    )) 
                }
            </div> */}
        </div>
        <img src={image} alt=""/>
        <Link to="/" className='seeMore'>See More</Link>
    </div>
    </>
  )
}
