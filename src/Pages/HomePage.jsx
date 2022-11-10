import React, { useEffect, useState } from 'react'
//component
import HeroCarousel from '../component/HeroCarousel/HeroCarousel'
import EntertaimentCard from '../component/Entertrntment/EntertaimentCard'
import PosterSlider from '../component/PostSlider/PosterSlider'

// Layout HOC
import DeafultHOC from "../Layouts/Deafult.Layout"
//axios
import axios from 'axios'






const HomePage = () => {
  const [recomondedMovies, setRecomondedMovies] = useState([]);
  const [premiermovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  //top rated (recomemded movies)
  useEffect(() => {
    const reqPopularMovies = async () => {
      const getPopularMOvies = await axios.get("/movie/popular")
      setRecomondedMovies(getPopularMOvies.data.results)
    }
    reqPopularMovies()
  }, [])
  // premiermovies/top rated

  useEffect(() => {
    const reqPremierMovies = async () => {
      const getPremierMOvies = await axios.get("/movie/top_rated")
      setPremierMovies(getPremierMOvies.data.results)
    }
    reqPremierMovies()
  }, [])
  // onlineStreamEvents/upcomimg
  useEffect(() => {
    const reqUpcomimgMovies = async () => {
      const getUpcomimgMOvies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomimgMOvies.data.results)
    }
    reqUpcomimgMovies()
  }, [])


  return (
    <>
      <HeroCarousel rec={recomondedMovies} />
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
          isDark={false} />
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
            isDark={true} />

        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider title="Online Streaming Events"
          subject=""
          posters={onlineStreamEvents}
          isDark={false} />
      </div>
    </>
  )
}

export default DeafultHOC(HomePage)