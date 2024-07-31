import React from 'react'
import './LASpa.css'
import { Navbar } from './components/Navigation-Bar/Navbar'
import { HeroSection } from './components/Hero-Section/HeroSection'
import { AboutUs } from './components/About-Us-HP/AboutUs'
import { ProductSt } from './components/Product-Section-HP/ProductSt'
import { ServicesSt } from './components/Service-Section-HP/ServicesSt'

export const LASpa = () => {
  return (
    <>
      <nav><Navbar /></nav>
      <div><HeroSection /> </div>
      <div><AboutUs /></div>
      <div><ProductSt /></div>
      <div><ServicesSt /></div>
    </>
  )
}
