import React, { useEffect, useState } from 'react'
//slider
import HeroSlider from "react-slick"
//Arrows
import { NextArrow, PervArrow } from './ArrowComponent';

const HeroCarousel = (props) => {

    const [images, setImages] = useState([]);
    useEffect(()=>{
        setImages(props.rec);
    })
    
    const settingLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow/> ,
        prevArrow: <PervArrow/> ,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"

    }
    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow/> ,
        prenArrow: <PervArrow/> ,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"

    }
    return (
        <>
            <div className='lg:hidden'>
                <HeroSlider {...settings}>
                    {
                        images.map((image,index) => (
                            <div className='w-full h-56 md:h-80 py-3"' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                                    alt=" Hero Banner" className='w-full h-full rounded-md object-cover object-center' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingLG} >
                    {images.map((images, index) => (
                        <div className="w-full h-96 px-2 py-3" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

        </>
    )
}

export default HeroCarousel