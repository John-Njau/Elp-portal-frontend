import * as React from 'react';
import { useState, react } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPublic } from '../../../lib/axios/axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormLabel, RadioGroup, Radio } from '@mui/material';
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
   
    firstName: '',
    lastName: '',
    PF: '',
    scholarCode: '',
    email: '',
    scholarType: '',
    password: '',
    confirm_password:'',

}


const SignUp = () => {


  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, firstName, lastName, PF, scholarCode, scholarType, password, confirm_password} = formFields;
  
  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pfError, setPFError] = useState('');
  const [wtfError, setWTFError] = useState('');
  const [passwordError, setPasswordError] = useState('');
 
  const [sTypeError, setSTypeError] = useState('');

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPassword = passwordRegex.test(formFields.password);
  const isValidEmail = emailRegex.test(formFields.email);


  const navigate = useNavigate();
  
  const resetFormFields = () => {
      setFormFields(defaultFormFields);
  }

  const handleSubmit = async(event) => {
      event.preventDefault();
    
   
     if(formFields.firstName === '' || !formFields.firstName.length){
      setFnameError('First name required');
      return;
    }else{
      setFnameError('');
    }
    if(formFields.lastName === '' || !formFields.lastName.length){
      setLnameError('Last name required');
      return;
    }else{
      setLnameError('');
    }
    if(formFields.email === '' || !formFields.email.length){
      setEmailError('Email required');
      return;
    }else if(!isValidEmail){
      setEmailError('Invalid email');
      return;
    }

    else{
      setEmailError('');
    }
    if((formFields.scholarType === 'ELP' || formFields.scholarType === 'BOTH')  && (formFields.PF === '' || !formFields.PF.length)){
      setPFError('PF required');
      return;
    }else{
      setPFError('');
    }
    
    if((formFields.scholarType === 'WTF' || formFields.scholarType === 'BOTH' ) && (formFields.scholarCode === '' || !formFields.scholarCode.length)){
      setWTFError('Scholar code required');
      return;
    }else{
      setWTFError('');
    }
    if(formFields.scholarType === '' || !formFields.scholarType.length){
      setSTypeError('Scholar type required');
      return;
    }else{
      setSTypeError('');
    }
    if(formFields.password === '' || !formFields.password.length){
      setPasswordError('Password required');
      return;
    }else if(!isValidPassword){
      setPasswordError('Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }
    else{
      setPasswordError('');
    }
    if(formFields.confirm_password === '' || !formFields.confirm_password.length){
      setPasswordError('password required');
      return;
    }else{
      setPasswordError('');
    }
    if(formFields.password !== formFields.confirm_password){
      setPasswordError('Passwords do not match');
      return;
    }else{
      setPasswordError('');
    }

  
      if(password !== confirm_password){
          alert("Passwords Don't Match!");
          return;
      }
      const payload = {
          
          "email": email,
          "first_name": firstName,
          "last_name": lastName,
         
          "WTF,ELP or Both": scholarType,
          "PF": PF,
          
          "scholar_code": scholarCode,
          "password": password,
          
       
          
        }
    
        
        
      try {
          const {status, statusText} = await await axiosPublic.post("api/user/register/",payload);
          if(status === 201 && statusText==="Created"){
              alert("Account Created Successfully, redirecting to SignIn...");
              
              //console.log("signInResponse",signInResponse)
              resetFormFields();
              navigate("/signin")
          }
          
          
      } catch (error) {
          if (error.response?.status === 500){
              //warning notification
              console.log("signInResponse error 500")

          }else if (error.response?.status=== 400){
              //error notification
              const  errors = error.response.data;
              if(errors?.username){
                  
                  let iterator = errors.username.values()
                  for(let message of iterator){
                      alert(message);
                  }   }
              else if(errors?.email){
                  
                  let iterator = errors.email.values()
                  for(let message of iterator){
                      alert(message);
                  }          }
              else if(errors?.phone_number){
                  
                  let iterator = errors.phone_number.values()
                  for(let message of iterator){
                      alert(message);
                  }
              }
              else if(errors?.PF){
                  
                  let iterator = errors.PF.values()
                  for(let message of iterator){
                      alert(message);
                  }               }
              else if(errors?.scholar_code){
                  alert("User with this scholar code exists")
                  let iterator = errors.scholar_code.values()
                  for(let message of iterator){
                      alert(message);
                  }
              }
              else if(errors?.password){
                  
                  let iterator = errors.password.values()
                  for(let message of iterator){
                      alert(message);
                  }
              }
              else{
                  alert('Unexpected error occured')
              }
              
              
              

          }
          // console.log({error})
          // //error notification
      }
      
      resetFormFields();
        
  }
  

  const handleChange = async(event) => {
      const {name, value} = event.target;
      await setFormFields({...formFields, [name]: value})
      
    

  }






  return (
    <ThemeProvider theme={theme}>
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
            Sign up
          </Typography>
          <Box component="form" name='myform' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  error={fnameError && fnameError.length ? true : false}
                  helperText={fnameError}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  error={lnameError && lnameError.length ? true : false}
                  helperText={lnameError}
                  required
                  fullWidth
                  value={lastName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={emailError && emailError.length ? true : false}
                  helperText={emailError}
                  required

                  fullWidth
                  type='email'
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
              <FormControl>
                <FormLabel
                error = {sTypeError && sTypeError.length ? true : false}
                helperText = {sTypeError} 
                id="radio-buttons-group-label">Scholar Type</FormLabel>
                <RadioGroup
                  
                  required
                  row
                  aria-labelledby="radio-buttons-group-label"
                  defaultValue=""
                  name="scholarType"
                  onChange={handleChange}
                >
                  <FormControlLabel onChange={handleChange} value="ELP" control={<Radio />} label="ELP" />
                  <FormControlLabel onChange={handleChange} value="WTF" control={<Radio />} label="Wings To Fly" />
                  <FormControlLabel onChange={handleChange} value="BOTH" control={<Radio />} label="Both" />
                </RadioGroup>
              </FormControl>
              </Grid>
              <>
              {(()=> {
                if(scholarType === 'ELP'){
                                                    
                  return <Grid item xs={12}><TextField
                    error={pfError && pfError.length ? true : false}
                    helperText={pfError}
                   required fullWidth name="PF" label="PF Number" id="pf" value={PF} autoComplete="pf" onChange={handleChange}
                  />
                  </Grid>
               }
               else if (scholarType === 'WTF'){
                  return <Grid item xs={12}><TextField
                    error={wtfError && wtfError.length ? true : false}
                    helperText={wtfError}
                  
                  required fullWidth name="scholarCode" label="Scholar Code" value={scholarCode} id="wtf" autoComplete="wtf" onChange={handleChange}
                  /></Grid>
               }
               else if( scholarType === 'BOTH'){
                  return <> <Grid item xs ={6} sm={6}><TextField
                    error={pfError && pfError.length ? true : false}
                    helperText={pfError}
                   required fullWidth name="PF" label="PF Number" value={PF} id="pf" autoComplete="pf" onChange={handleChange}
                  />
                  </Grid>
                  <Grid item xs ={6} sm={6}><TextField
                    error={wtfError && wtfError.length ? true : false}
                    helperText={wtfError} 
                  required fullWidth name="scholarCode" label="Scholar Code" value={scholarCode} id="wtf" autoComplete="wtf" onChange={handleChange}
                />
                </Grid>
                </>
               }
               return <></>
              })()}
              <Grid item xs={6} sm={6}>
               <TextField
              error={passwordError && passwordError.length ? true : false}
              helperText={passwordError}
              required
              margin="normal"
              fullWidth
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            /></Grid>
            <Grid item xs={6} sm={6}>
             <TextField
              error={passwordError && passwordError.length ? true : false}
              helperText={passwordError}
              margin="normal"
              required
              fullWidth
              value={confirm_password}
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="current-password"
              onChange={handleChange}
            /></Grid>
              </>
              
             

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
              </Grid>
              <Button
              form='myform'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
             
            >
              Sign Up
            </Button>
            </Grid>
            </Box>
           
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default MainLayoutNoAuth(SignUp);