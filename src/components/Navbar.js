import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';
import authContext from "./Context";
import { authContext1 } from "./Context";
import { RouterProvider, useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import {auth,db} from './Database'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {
    const {authobj,setAuthobj} = React.useContext(authContext);
    const {authobj1,setAuthobj1} = React.useContext(authContext1);


    
    const onSearch = (e) => {
      const newobj = {...authobj1,search: e.target.value}
      setAuthobj1(newobj);
    }
    const navigate = useNavigate();
    const [login,setLogin] = React.useState(true);
    const goToAbout = () => {
        navigate("");
    }
    const changeLogin = () => {
      setAuthobj1({...authobj1,search: null});
      navigate("/login");
    }
    const changeLogout = () => {
      signOut(auth).then(() => {
      
      }).catch((error) => {
        
      });
    }
  return (
    

<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#333'}}>
        <Toolbar>
        <MovieIcon sx={{mr: "1rem"}} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={goToAbout}
          >
           BookMyShow
          </Typography>
          
         {authobj1.search != null? <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={onSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>:""
}
            <>{
            !authobj?
            <Button variant="outlined" onClick={changeLogin}>Login</Button>:
            <Button variant="outlined" onClick={changeLogout}>Logout</Button>
            }</>
          
        </Toolbar>
      </AppBar>
      </Box>
   </>
  );
}