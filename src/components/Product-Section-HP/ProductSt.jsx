import React from 'react'
import { OneProductStyle1 } from '../common/common-product-element/OneProductStyle1'

export const ProductSt = () => {
  return (
    <div className='mx-10 mt-10'>
      <div className='flex items-baseline justify-between'>
        <h1>Discover <span className='text-orange-800'>Our Products</span></h1>
        <a href="">Explore Now</a>
      </div>
      <div className='flex items-center justify-center gap-9 mt-5'>
        <div><OneProductStyle1 /></div>
        <div><OneProductStyle1 /></div>
        <div><OneProductStyle1 /></div>
      </div>
    </div>
  )
}
