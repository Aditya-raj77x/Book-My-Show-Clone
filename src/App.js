import './App.css';
//ract slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// router
import { Routes, Route } from "react-router-dom"
//pages
import HomePage from "./Pages/HomePage"
import MoviePage from "./Pages/MoviePage"
import Plays from "./Pages/Plays"


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
