import React from 'react'
//slick
import {Slider} from "react-slick";

const EntertaimentCard = (props) => {
  return (
    <>
      <div className='w-full h-30 px-2'>
        <img 
        src={props.src} 
        alt=""  
        className='w-full h-full rounded-lg'/>
      </div>
    </>
  )
}

export default EntertaimentCard