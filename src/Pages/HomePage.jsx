import React, { useEffect, useState } from 'react'
//component
import HeroCarousel from '../component/HeroCarousel/HeroCarousel'
import EntertaimentCard from '../component/Entertrntment/EntertaimentCard'
import PosterSlider from '../component/PostSlider/PosterSlider'

// Layout HOC
import DeafultHOC from "../Layouts/Deafult.Layout"
//axios
import axios from 'axios'
import userEvent from '@testing-library/user-event'





const HomePage = () => {
  const [recomondedMovies, setRecomondedMovies] = useState([]);
  const [premiermovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(()=>{
    const reqTopReatedMovies=async ()=>{
      const getTopRatedMOvies=await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=f772fb068378bb02690aed3d5cf48aac")
      setRecomondedMovies(getTopRatedMOvies.data.results)
    }
    reqTopReatedMovies()
  },[])

  return (
    <>
      <HeroCarousel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
          The Best of Entertainment
        </h1>
        <EntertaimentCard />

      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recomondedMovies} 
          isDark={false}/>
      </div>
      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
             alt="Rupay" className='w-fill h-full' />
          </div>
          <PosterSlider title="Premiers"
          subtitle="Brand New Releases Every Friday"
          posters={premiermovies} 
          isDark={true}/>

        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider title="Online Streaming Events"
          subject=""
          posters={onlineStreamEvents} 
          isDark={false}/>
      </div>
    </>
  )
}

export default DeafultHOC(HomePage)