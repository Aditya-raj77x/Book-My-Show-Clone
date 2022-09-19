import './App.css';

//axios
import axios from 'axios';

//ract slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// router
import { Routes, Route } from "react-router-dom"
//pages
import HomePage from "./Pages/HomePage"
import MoviePage from "./Pages/MoviePage"
import Plays from "./Pages/Plays"
//default variables for movieDB url
axios.defaults.baseURL="https://api.themoviedb.org/3"
// api key
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/plays' element={<Plays/>}/>
    </Routes>
  );
}

export default App;
