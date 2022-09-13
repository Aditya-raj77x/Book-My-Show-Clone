import React, { useState } from 'react'
//component
import HeroCarousel from '../component/HeroCarousel/HeroCarousel'
import EntertaimentCard from '../component/Entertrntment/EntertaimentCard'
import PosterSlider from '../component/PostSlider/PosterSlider'

// Layout HOC
import DeafultHOC from "../Layouts/Deafult.Layout"



const HomePage = () => {
  const [recomondedMovies, setRecomondedMovies] = useState([]);
  const [premiermovies, setPremierMovies]= useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents]=useState([]);

  return (
    <div>HomePage</div>
  )
}

export default DeafultHOC(HomePage)