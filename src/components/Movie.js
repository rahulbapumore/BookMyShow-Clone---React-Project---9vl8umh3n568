
import Grid from '@mui/material/Grid';


import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import React from 'react'; 
import { useState } from 'react'; 
import axios from 'axios';
import {SkeletonChildrenDemo} from './UpcomingMovies'
const Movie = () => {
    const params = useParams();
    let movie_id = params.id;
    const [movie,setMovie] = useState({});
    React.useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US`).then((response)=>{
              
            let temp = response.data
        temp.show = true
        console.log(temp);  
            setMovie(temp);
            
        });
        
    },[]);
return (
    <Box sx={{height: '600px' }}>
    <Box sx={{ height: '500px' ,objectFit: 'cover', background: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`
, backgroundSize: '100%',backgroundClip: 'border-box', padding: 1 }} >
    <Grid container sx={{ display: 'flex',justifyContent: 'flex-flow',margin:6,rowGap: 15 }}>
        <Box>
        
            <Grid item  >
                <SkeletonChildrenDemo  data={movie} />
            </Grid>
        </Box>
        <Box >
            

        </Box>
    </Grid>
    </Box>
    </Box>
) ;
}
export default Movie;