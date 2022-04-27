import { Box, Button, TextField } from '@mui/material';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCityImage,
  fetchCurrentWeather,
} from '../../../store/weather/weatherActions';
import { Container } from './SearchForm.styled';

const SearchForm = () => {
  const dispatch = useDispatch();
  const cityNameRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (cityNameRef.current.value.length > 0) {
      dispatch(fetchCityImage(cityNameRef.current.value));
      dispatch(fetchCurrentWeather(cityNameRef.current.value));
      cityNameRef.current.value = '';
    } else {
      alert('Please enter a city name!');
    }
  };

  return (
    <Container>
      <Box component='form' autoComplete='off'>
        <TextField
          inputRef={cityNameRef}
          className='searchInput'
          id='searchInput'
          label='Enter a City'
          variant='outlined'
        />
        <Button
          onClick={handleFormSubmit}
          className='searchButton'
          variant='contained'
          id='searchBtn'
        >
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default SearchForm;
