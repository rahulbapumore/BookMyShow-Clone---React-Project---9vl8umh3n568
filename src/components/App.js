import React from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'
import '../styles/App.css'
const App = () => {


  return (
    <div id="main">
      
      
      <MovieList type="Currently Available In Theatre" which="https://api.themoviedb.org/3/movie/now_playing?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US&page=1"/>

      <MovieList type="Upcoming Movies" which="https://api.themoviedb.org/3/movie/upcoming?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US&page=1"/>

      <MovieList type="Popular Movies" which="https://api.themoviedb.org/3/movie/popular?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US&page=1"/>

      <MovieList type="Top Rated Movies" which="https://api.themoviedb.org/3/movie/top_rated?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US&page=1" />
    </div>
  )
}


export default App;
