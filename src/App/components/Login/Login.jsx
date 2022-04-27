import React, { useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logo from '../../../assets/images/ipg-automotive-logo.svg';
import { ErrorText } from './Login.styled';
import { useDispatch } from 'react-redux';
import { createUsername } from '../../../store/user/userActions';
import { useNavigate } from 'react-router-dom';

const Copyright = (props) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        IPG AUTOMOTIVE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const theme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  const approvedUser = {
    username: 'ipgautomotive',
    password: 'carmaker',
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      usernameRef.current.value === approvedUser.username &&
      passwordRef.current.value === approvedUser.password
    ) {
      setError('');
      dispatch(createUsername(usernameRef.current.value));
      navigate('/homepage', { replace: true });
    } else {
      setError('Please check your credentials!');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              width: '100px',
              height: '100px',
              background: '#003063',
              p: 4,
            }}
          >
            <img height={'80px'} width={'80px'} src={logo} alt='ipg-logo' />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              autoFocus
              inputRef={usernameRef}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              label='Password'
              type='password'
              id='password'
              inputRef={passwordRef}
            />
            {error !== '' ? (
              <ErrorText id='errorMessage'>{error}</ErrorText>
            ) : (
              ''
            )}
            <Button
              type='submit'
              id='loginBtn'
              fullWidth
              variant='contained'
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
