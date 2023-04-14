import * as React from 'react';
import { useState, react } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../../assets/images/Logo.svg"
import MainLayoutNoAuth from '../../../layouts/MainLayoutNoAuth';
import useAuth from '../../../hooks/useAuth';
import { axiosPublic } from '../../../lib/axios/axios';
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/" style={{textDecoration: 'none', color: '#8B181A',}}>
        ELP Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme({
    palette: {
      primary: {
        main: '#8B181A',
      },
      secondary: {
        main: '#8B181A',
      },
    },
  });


  const defaultFormFields = {
    
    email: '',
    password: '',
   
}  
const  SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields;
  const { auth,setAuth } = useAuth();
  const axiosInstance = useAxiosPrivate();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  const resetFormFields = () => {
      setFormFields(defaultFormFields);
  }    

  const handleChange = (event) => {
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value})
      
  }
  const handleSubmit = async (event) => {
    if(formFields.email === '' || !formFields.email.length){
      setEmailError('Email required');
      return;
    } else{
      setEmailError('');
    }
    if(formFields.password === '' || !formFields.password.length){
      setPasswordError('Password required');
      return;
    }else{
      setPasswordError('');
    }

  event.preventDefault();
  let payload = {
    email : formFields.email,
    password :formFields.password
};

try {
  const { data: fetchLoginResponses, status } = await axiosPublic.post("api/users/sign-in/",payload);
  //console.log("fetchLoginResponses",fetchLoginResponses.access)
  if(status===201 || status ===200){
    var decoded = jwt_decode(fetchLoginResponses.access);
  
    // const email = decoded.email
    let role = "2000,3000,4000,5000"
    let cat = role.split(",");
     cat = cat.map(Number);
     localStorage.setItem("refresh", fetchLoginResponses.refresh)
     setAuth({user_id:decoded.user_id,user:decoded.email,roles:cat,username:decoded.username,accessToken:fetchLoginResponses.access})
    
     const { data: fetchUserCatResponses, status } = await axiosInstance.get(`api/user/get-user/${decoded.user_id}/`);
     let newCat =(fetchUserCatResponses.user_group.toString() +",90,400")
      cat = newCat.split(",");
     cat = cat.map(Number);
     console.log("category",cat)
     localStorage.setItem("cat", cat)

     setAuth(prevAuth => ({
      ...prevAuth,
      roles: cat
    }));

   
   
      navigate('/dashboard', {replace:true});

    


    
  //   //navigate(from, {replace:true});
    
   }
  

 
  
} catch (error) {

  console.log({error})
  
}
  
  
}
  


  return (
    <ThemeProvider theme={theme}>
      <form action=""  >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
  
          <a href="#" className="logo"><img src={logo} alt='equity logo'/></a>
          
          <Typography component="h1" variant="h5" style={{textDecoration: 'none', color: '#8B181A',}}>
            ELP Portal
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
               error={emailError && emailError.length ? true : false}
               helperText={emailError}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}

            />
            <TextField
              error={passwordError && passwordError.length ? true : false}
              helperText={passwordError}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"  />}
              label="Remember me"
            />
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </form>
    </ThemeProvider>
  );
}

export default MainLayoutNoAuth(SignIn);