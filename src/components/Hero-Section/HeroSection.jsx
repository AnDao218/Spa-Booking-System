import React from 'react'
import './HeroSection.css'

export const HeroSection = () => {
    return (
        <div className="flex items-center h-screen mx-10">
            <div className='outer-content'>
                <div className='content'>
                    <h1 className=''>Experience <span className='text-orange-800'>luxury and relaxation</span> like never before</h1>
                    <p className='text-gray-500'>We believe in nurturing the mind, body, and spirit with our comprehensive range of beauty and wellness treatments.</p>
                    <div className='flex items-start justify-start gap-10 py-9'>
                        <a href="" className='rounded-md bg-orange-800 text-white py-2 px-10'>Book Now</a>
                        <a href="" className='rounded-md text-slate-900 py-2 px-10'>View Our Services</a>
                    </div>
                </div>
            </div>
            <div className='image'>
                <img className="w-screen" src="https://firebasestorage.googleapis.com/v0/b/la-spa-booking-system.appspot.com/o/HomePg%2FheroSectionBG.png?alt=media&token=f28aaab7-b332-428e-8f14-73097f0e4e12" alt="Hero-Bg" />
            </div>
        </div>
    )
}
