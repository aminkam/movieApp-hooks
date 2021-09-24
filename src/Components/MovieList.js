import React from 'react'
import Movies from './Movies'

const MovieList = ({movieLists}) => {
    return (
        <div className="ahmed">
           
           {movieLists.map((el,index) => <Movies movielists={el} key={index} />)} 
            
        </div>
    )
}

export default MovieList
