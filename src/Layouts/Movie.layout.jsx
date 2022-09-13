import React from 'react'
import MovieNavbar from '../component/MovieNavbar'

const MovieHOC = (Component) =>
    ({ ...props }) => {
        return (
            <div>
                <MovieNavbar/>
                <Component {...props}/>
                <div>Footer</div>
            </div>
        )
    }

export default MovieHOC