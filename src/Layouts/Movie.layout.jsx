import React from 'react'
import MovieNavbar from '../component/Navbar/MovieNavbar'
import Footer from '../component/Footer'

const MovieHOC = (Component) =>
    ({ ...props }) => {
        return (
            <div>
                <MovieNavbar />
                <Component {...props} />
                <Footer />
            </div>
        )
    }

export default MovieHOC