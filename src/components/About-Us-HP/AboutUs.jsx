import React from 'react'
import './AboutUs.css'

export const AboutUs = () => {
    return (
        <div className='bg-box-content relative flex items-center w-full h-80'>
            <div className='top-layer'></div>
            <div className='box-content text-center'>
                <h1 className='text-white'>Get To Know More</h1>
                <p className='my-5'>Founded with a passion for beauty and wellness,
                    Luci Athyl has been providing exceptional services for several years.</p>
                <a href="" className='rounded-md bg-white text-slate-900 py-2 px-10'>About Us</a>
            </div>
        </div>
    )
}
