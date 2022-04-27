import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {
  Container,
  WeatherCardTitle,
  WeatherCondition,
  WeatherInfos,
} from './WeatherCard.styled';

import addFavIcon from '../../../assets/images/addFav.png';
import removeFavIcon from '../../../assets/images/removeFav.png';

const WeatherCard = ({
  cityId,
  cityImage,
  cityName,
  weatherIcon,
  description,
  temperature,
  humidity,
  precip,
  handleAddFavorite,
  handleRemoveFavoriteCity,
}) => {
  return (
    <Container>
      <Card
        id={cityId ? 'favWeatherCard' : 'weatherCard'}
        sx={{ minWidth: 345 }}
      >
        <CardMedia
          component='img'
          height='200'
          image={cityImage}
          alt='cityImage'
        />
        {handleAddFavorite && (
          <img
            onClick={handleAddFavorite}
            className='addFavIcon'
            src={addFavIcon}
            alt='addFav'
          />
        )}
        {handleRemoveFavoriteCity && (
          <img
            onClick={handleRemoveFavoriteCity}
            className='removeFavIcon'
            src={removeFavIcon}
            alt='removeFav'
            id={cityId}
          />
        )}
        <CardContent>
          <WeatherCardTitle>
            <div>
              <Typography gutterBottom variant='h5' component='div'>
                {cityName}
              </Typography>
              <WeatherCondition>{description}</WeatherCondition>
            </div>

            <img src={weatherIcon} alt='weatherIcon' />
          </WeatherCardTitle>
          <WeatherInfos>
            <div className='info'>Temperature: {temperature}°</div>
            <div className='info'>Humidity: {humidity}</div>
            <div className='info'>Precip: {precip}</div>
          </WeatherInfos>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WeatherCard;
