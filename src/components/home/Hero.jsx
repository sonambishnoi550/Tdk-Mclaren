import React from 'react'
import Header from '../../common/Header'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(./assets/webp/hero-bg.webp)` }} className='bg-hero-bg bg-cover bg-no-repeat max-2xl:min-h-screen bg-center pb-40'>
            <Header/>
            <h1 className='text-white font-bold text-custom-6xl max-w-[1072px] mx-auto text-center !leading-custom-lg pt-16 max-sm:pt-[39px] pb-[15px] max-sm:text-3xl max-sm:max-w-[374px]'>Driving Transformation for Performance and Passion Within </h1>
            <p className='font-normal text-center text-white text-custom-xl leading-custom-lg max-sm:text-base max-sm max-lg:max-w-[540px] mx-auto'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
        </div>
    )
}

export default Hero