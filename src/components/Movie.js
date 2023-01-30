
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import React from 'react'; 
import { useState } from 'react'; 
import axios from 'axios';
import {SkeletonChildrenDemo} from './MovieList'
import StarIcon from '@mui/icons-material/Star';
const genreobj = {};
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US').then((response)=>{
    
    for(let i=0;i<response.data.genres.length;i++)
    {
        genreobj[response.data.genres[i].id] = response.data.genres[i].name;
    }
});

const Movie = () => {
    const params = useParams();
    let movie_id = params.id;
    const [movie,setMovie] = useState({});
    console.log(movie);
    console.log("hii");
    React.useEffect(()=>{

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US`).then((response)=>{
              
            let temp = response.data
            temp.show = true
        
            setMovie({...temp});
            
            
        });
        
    },[]);
return (
    <Box sx={{height: '600px' }}>
        
    <Box sx={{ height: '500px' ,objectFit: 'cover', background: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundSize: '100%',backgroundClip: 'border-box', padding: 1 }} >
    <Grid container sx={{ display: 'flex',justifyContent: 'flex-flow',margin:6,rowGap: 15 }}>
        <Box>
        
            <Grid item  >
                <SkeletonChildrenDemo  data={movie} />
            </Grid>
        </Box>
        <Box sx={{ margin: 2 }} >
            
            <Box sx={{    color: '#FFF', textShadow: `0 0 5px #fff, 0 0 5px #fff, 0 0 5px #0073e6, 0 0 5px #0073e6, 0 0 10px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6` }}>
            <h1>{movie.original_title}</h1>
            <Box sx={{ margin: 1 }}>
        
            <StarIcon /> 
            </Box>
            {movie.vote_average}/10
             <Box sx={{ width: '100%' , overflow: 'hidden' }}>
             <h2>2D English</h2>

            </Box>
<h3>{movie.runtime} min / {movie.release_date} / <>{movie.genres?.map((obj)=> <strong>{obj.name},</strong>)}</></h3>
        </Box>
        </Box>
    </Grid>
    </Box>
    </Box>
) ;
}
export default Movie;