import { useState } from 'react/cjs/react.development';
import './App.css';
import { listOfMovies } from './Components/List';
import MovieList from './Components/MovieList';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Components/NavBarr';
import Search from './Components/Search';
import Add from './Components/Add';




function App() {
   const [movieLists, setMovieList] = useState(listOfMovies)
   const [text, setText] = useState("")
   const [stars, setStars] = useState(1)

   //Add a Movie 
   let handleAdd = (newMovie) => {
       setMovieList([...movieLists,newMovie])}
   //handleChange  for (Search.js)
   let handleChange =(e)=>{
     setText(e.target.value)}
   //handleStars for (Search.js)
   let handleRating = (x)=> {setStars(x)}

   


  return (
    <div className="bodyy">
      <div className="navbarr"><NavBarr /></div>
      <div className="Search"><Search text={text} rating={stars} handleChange={handleChange} handleRating={handleRating}/></div>
      <div><MovieList movieLists={movieLists.filter(el=>el.name.toLowerCase().includes(text.toLowerCase()) && (el.rating>=stars))} /></div>
      <div className="modall"><Add add={handleAdd}/></div>
    
    </div>
  );
}

export default App;
