import React, { useEffect, useState, useContext } from 'react'
//Layout
import MovieHOC from "../Layouts/Movie.layout"
//params for getting the id
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MovieContext } from '../context/MovieContext';
import Slider from "react-slick"
import { FaCcVisa, FaCcApplePay } from "react-icons/fa"
import PosterSlider from '../component/PostSlider/PosterSlider';
import MovieHero from '../component/MovieHero/MovieHero';

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);
  
  const [cast, setCast] = useState([]);
  const [SimilarMovies, setSimilarMovies] = useState([]);
  const [rc, setRecommendedMovies] = useState([]);
  //getting cast
  useEffect(() => {
    const reqCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`)
      setCast(getCast.data.cast)
    }
    reqCast()
  })

  //getting similarMovies
  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`)
      setSimilarMovies(getSimilarMovies.data.results)
    }
    reqSimilarMovies()
  }, [id])

  //getting recomemdedMovies
  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id])

  //getting Movie Data
  useEffect(()=>{
    const rqMovie=async()=>{
      const getMovieData=await axios.get(`/movie/${id}`)
      setMovie(getMovieData.data)
    }
    rqMovie()
  },[id])

  const settingCast = {};
  const settings = {};
  return (
    <>
      <MovieHero/>
      <div className='my-12 container px-4 lg:ml-20 lg:w-2/3'>
        <div className='flex flex-col gap-3 items-start'>
          <h1 className='text-gray-800 font-bold text-2xl'>
            About the Movie
          </h1>
          <p>
            {movie.overview}
          </p>
        </div>
        <div className='my-8 '>
          <hr />
        </div>
        <div className='my-8'>
          <h2 className='text-gray-800 font-bold mb-3 text-2xl'>
            Applicable Offers
          </h2>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full' />
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>
                  Visa Stream Offers
                </h3>
                <p className='text-gray-600'>
                  Get 50% off upto INR 150 on all RuPay cards on BookMyShow Streams.</p>
              </div>

            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full' />
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>
                  Film Pass
                </h3>
                <p className='text-gray-600'>
                  Get 50% off upto INR 150 on all RuPay cards on BookMyShow Streams.</p>
              </div>


            </div>






          </div>
        </div>
        <div className='my-8 '>
          <hr />
        </div>
        {/* {cast and crew slider} */}
        <div className='my-8 '>
          <hr />
        </div>
        {/* recommended movie slide */}
        <div className='my-8'>
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={rc}
            isDark={false} />
        </div>

        <div className='my-8 '>
          <hr />
        </div>
        {/* recommended movie slide */}
        <div className='my-8'>
          <PosterSlider
            config={settings}
            title="BMS XCLUSICE"
            posters={rc}
            isDark={false} />
        </div>

      </div>

    </>
  )
}

export default MovieHOC(MoviePage)