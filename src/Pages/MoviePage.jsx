import React, { useEffect, useState } from 'react'
//Layout
import MovieHOC from "../Layouts/Movie.layout"
//params for getting the id
import { useParams } from 'react-router-dom'
import axios from 'axios';

const MoviePage = () => {
  const {id}=useParams();
  const [cast,setCast]=useState([]);
  const [SimilarMovies,setSimilarMovies]=useState([]);
  const[recomemdedMovies,setRecomemdedMovies]=useState([]);
  //getting cast
  useEffect(()=>{
    const reqCast=async()=>{
      const getCast=await axios.get(`/movie/${id}/credits`)
      setCast(getCast.data.cast)
    }
    reqCast()
  },[id])

  //getting similarMovies
  useEffect(()=>{
    const reqSimilarMovies=async()=>{
      const getSimilarMovies=await axios.get(`/movie/${id}/similar`)
      setSimilarMovies(getSimilarMovies.data.results)
    }
    reqSimilarMovies()
  },[id])

  //getting recomemdedMovies
  useEffect(()=>{
    const reqrecomemdedMovies=async()=>{
      const getrecomemdedMovies=await axios.get(`/movie/${id}/recommendations`)
      setRecomemdedMovies(getrecomemdedMovies.data.results)
    }
    reqrecomemdedMovies()
  },[id])
  return (
    <div>MoviePage</div>
  )
}

export default MovieHOC(MoviePage)