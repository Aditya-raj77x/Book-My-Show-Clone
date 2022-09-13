import React, { useState } from 'react'
//slider
import HeroSlider from "react-slick"

const HeroCarousel = () => {

    const [images, setImages] = useState([]);
    return (
        <>
            <div className='lg:hidden'>
                <HeroSlider>
                    {
                        images.map((image)=>(
                            <div className='w-fill h-56 md:h-80 py-3'>
                                <img src="" alt=" Hero Banner" className='w-full h-full rounded-md object-cover' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className='hidden lg:block'></div>

        </>
    )
}

export default HeroCarousel