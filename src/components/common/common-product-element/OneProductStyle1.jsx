import React from 'react'
import { Star } from '../common-icon/Star'
import './OneProduct.css'

export const OneProductStyle1 = () => {
    return (
        <div className='product'>
            <div className='product-image'>
                <img src="https://firebasestorage.googleapis.com/v0/b/la-spa-booking-system.appspot.com/o/HomePg%2FproductSt%2Fserum1.jpg?alt=media&token=ab000032-5159-473a-9bd9-e460839804a8" alt="Serum 1" />
            </div>
            <div className='product-content'>
                <div className='flex justify-between items-center'>
                    <p>L'Oréal Paris</p>
                    <a href="" className='product-link-add rounded-md bg-slate-900 text-white py-1 px-5 mt-4 mr-2'>Add To Cart</a>
                </div>
                <div>
                    <p className='product-name'>Navier Pearl Serum</p>
                </div>
                <div>
                    <Star /><Star /><Star /><Star /><Star />
                    <span className='product-feedback-number text-gray-400 mx-4'>(35)</span>
                    <p className='product-price'>175.000</p>
                </div>
            </div>
        </div>
    )
}
