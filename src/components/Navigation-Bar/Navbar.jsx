import React from 'react'
import { Search } from '../common/common-icon/Search'

export const Navbar = () => {
    return (
        <nav className='flex items-center py-5 px-10 justify-between gap-30'>
            {/* Nav Items */}
            <div className='flex'>
                <ul className='flex gap-12 text-gray-500 font-medium'>
                    <li><a href="" className='hover:text-orange-800'>Home</a></li>
                    <li><a href="" className='hover:text-orange-800'>Services</a></li>
                    <li><a href="" className='hover:text-orange-800'>Products</a></li>
                    <li><a href="" className='hover:text-orange-800'>Location&Hours</a></li>
                </ul>
            </div>
            <div className=''> {/* Logo */}
                <a href="">
                    <img src="https://firebasestorage.googleapis.com/v0/b/la-spa-booking-system.appspot.com/o/logo%2FLA_Spa_Logo.svg?alt=media&token=445de3a1-6b8f-4c10-a80d-7c7cc1bb897a" alt="LA-Logo" />
                </a>
            </div>
            <div className='flex'> {/* SearchBar */}
                <div className='border border-neutral-500 rounded-3xl flex overflow-hidden mx-5'>
                    <div className='flex items-center justify-center px-3 border-1'>
                        <input type="text" class="px-3 py-2" placeholder="Search..." />
                        <button><Search /></button>
                    </div>
                </div>
                <div className='login-signup-btn flex justify-center items-center'> {/* SignIn/SignUp */}
                    <a href="">Sign In</a>
                    <a href="" className='rounded-md bg-slate-900 text-white py-2 px-4 mx-4'>Sign Up</a>
                </div>
            </div>
        </nav>
    )
}
