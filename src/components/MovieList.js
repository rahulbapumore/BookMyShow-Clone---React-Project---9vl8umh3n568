import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { loadingContext } from './Context';
import authContext from "./Context";
import { authContext1 } from "./Context";
const Image = styled('img')({
  width: '100%',
  height: '100%',
  
});
const genreobj = {};
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6180a45f8f909138bfb07757c25c1dc4&language=en-US').then((response)=>{
    
    for(let i=0;i<response.data.genres.length;i++)
    {
        genreobj[response.data.genres[i].id] = response.data.genres[i].name;
    }
});


function SkeletonChildrenDemo(props) {
  
  
  return (
    <div>
        
      <Box sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'space-around' ,margin: 2 ,width: "300px",height: "380px"}}>
        {(!(props.data?.show))?<Box sx={{ display: 'flex',alignItems: 'center', margin: 1 }}>
            <Box sx={{ margin: 1 }}>
                <Avatar src={"https://image.tmdb.org/t/p/w500"+props.data.poster_path} />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Typography><strong>{props.data.title}</strong></Typography>
            </Box>
        </Box>:""
        }
        
        <>
        {!props.loading?
        <Image 
            
            style={{maxHeight:'100%',maxWidth:'100%',margin:2}}
            src={"https://image.tmdb.org/t/p/w500"+props.data.poster_path}
            alt=""
/>:<h1>Loading image...</h1>}</>
        
        {(!(props.data?.show))?<Box sx={{  }}>
            <Box sx={{ margin: 1 }}>
        
            <StarIcon /> {props.data.vote_average}/10
            </Box>
            { props.data.genre_ids? <Box sx={{ width: '100%' , overflow: 'hidden' }}>
            <Typography>{props.data.genre_ids.map((id)=> genreobj[id]).join('/')}</Typography>
        </Box>:""}
        </Box>:""}

        
      </Box>
    </div>
  );
}

export default function MovieList(props) {
    const [movies,setMovies] = React.useState([]);
    const navigate = useNavigate()
    const [loading,setLoading] = React.useState(true)
    const {authobj,setAuthobj} = React.useContext(authContext);
    const {authobj1,setAuthobj1} = React.useContext(authContext1);
    
    const onClickCard = (arg) => {
        navigate(`/movie/${arg.id}`,{state: arg});
      }
    
    React.useEffect(()=>{
      setLoading(true);
        axios.get(props.which).then((response)=>{
            setMovies(response.data.results);
            
            setAuthobj1({...response.data,search: ''})
            setLoading(false);
        });
        
    },[]);

  return (
    <>

    <Box>
      <Box sx={{ margin: 10 }}>
      <div><h2>{props.type}</h2></div>
    </Box>
        <Grid container sx={{ display: 'flex',justifyContent: 'flex-flow',margin:6,rowGap: 15}}>
        {
          authobj1.search?.toLowerCase() != ''?
            movies.map((mov,ind)=>{


 
              if( mov.title?.toLowerCase().includes(authobj1.search?.toLowerCase()))
              {
                return (<Grid item key={ind} onClick={() => onClickCard(mov)}>
                         <SkeletonChildrenDemo loading={loading} setLoading={setLoading} data={mov}/>
                      </Grid>)
              }



            })   :
            movies.map((mov,ind)=>{


 

                return (<Grid item key={ind} onClick={() => onClickCard(mov)}>
                         <SkeletonChildrenDemo loading={loading} setLoading={setLoading} data={mov}/>
                      </Grid>)




            }) 

        }
        </Grid>
    
        </Box>
  
    </>
  );
}
export {SkeletonChildrenDemo};