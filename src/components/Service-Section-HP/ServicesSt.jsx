import React from 'react'
import { OneServiceStyle1 } from '../common/common-service-element/OneServiceStyle1'

export const ServicesSt = () => {
    return (
        <div className='my-10 mx-10'>
            <div>
                <h1 className='text-center'>Enjoy Our <span className='text-orange-800'> Wonderful Services</span></h1>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <OneServiceStyle1 />
                <OneServiceStyle1 />
                <OneServiceStyle1 />
                <OneServiceStyle1 />
            </div>
            <div className='text-center'>
                <a href="">Explore More</a>
            </div>
        </div>
    )
}
