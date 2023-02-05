
import Grid from '@mui/material/Grid';


import { useParams ,useNavigate} from 'react-router-dom';
import React from 'react'; 
import { useState ,useContext} from 'react'; 
import axios from 'axios';
import {SkeletonChildrenDemo} from './MovieList'
import Book from './Book'
import StarIcon from '@mui/icons-material/Star';
import authContext from "./Context";
import { authContext1 } from "./Context";
import PopperPopupState from './Book';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const genreobj = {};
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US').then((response)=>{
    
    for(let i=0;i<response.data.genres.length;i++)
    {
        genreobj[response.data.genres[i].id] = response.data.genres[i].name;
    }
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Movie = () => {
    const params = useParams();
    let movie_id = params.id;
    const [movie,setMovie] = useState({});
    const navigate = useNavigate();
    console.log(authobj)
    const {authobj,setAuthobj} = useContext(authContext);
    const {authobj1,setAuthobj1} = useContext(authContext1);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        if(!authobj)
        {
            
            navigate("/login");
        }
        else
        {
        
            
            setOpen(true);
            
        }
        
    }
    const handleClose = () => setOpen(false);
    const done  = () => {
        if(authobj)
        {
            
            navigate("/");
        }

    }
    React.useEffect(()=>{
        setAuthobj1({...authobj1,search: null})
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US`).then((response)=>{
              
            let temp = response.data
            temp.show = true
        
            setMovie({...temp});
            
            
        });
        
    },[]);
return (
<>
    <Box sx={{height: '600px' }}>
        
    <Box sx={{ height: '600px' ,objectFit: 'cover', background: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundSize: '100%',backgroundClip: 'border-box', padding: 1 }} >
    <Grid container sx={{ display: 'flex',justifyContent: 'flex-flow',margin:6,rowGap: 15 }}>
        <Box>
        
            <Grid item  >
                <SkeletonChildrenDemo  data={movie} />
            </Grid>
        </Box>
        <Box sx={{ margin: 1 }} >
            
        <Box sx={{    color: '#FFF', textShadow: `0 0 5px #fff, 0 0 5px #fff, 0 0 5px #000, 0 0 5px #000, 0 0 10px #000, 0 0 30px #000, 0 0 35px #000` }}>
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
        <Button variant="contained" onClick={handleOpen}>Book now</Button>
        
  

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
            Congratulations your ticket is booked !
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {movie.original_title}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Email: {authobj?.email}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Seat No. {Math.floor(Math.random()*100)}
            </Typography>
            <Button variant="contained" onClick={done}>Done</Button>
            </Box>
        </Modal>
        
        </Box>
 
    </Grid>
    <Box sx={{    color: '#FFF', textShadow: `0 0 5px #fff, 0 0 5px #fff, 0 0 5px #000, 0 0 5px #000, 0 0 10px #000, 0 0 30px #000, 0 0 35px #000` }}>
        <h3>About the movie</h3>
        {movie.overview}
        </Box>
    </Box>
    
    </Box>
    
</>
) ;
}
export default Movie;

