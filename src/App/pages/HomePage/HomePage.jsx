import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../../components/SearchForm';
import WeatherCard from '../../components/WeatherCard';
import WelcomeMessage from '../../components/WelcomeMessage';
import { Container, FavoriteCities } from './HomePage.styled';

import { v4 as uuidv4 } from 'uuid';
import { weatherActions } from '../../../store/weather/weatherSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { currentWeather, cityImage, favoriteCities } = useSelector(
    (state) => state.weather
  );

  const handleAddFavorite = () => {
    const data = {
      id: uuidv4(),
      cityName: currentWeather.location.name,
      cityImage: cityImage?.response?.images[0].image.url,
      weatherIcon: currentWeather.current.condition.icon,
      description: currentWeather.current.condition.text,
      temperature: currentWeather.current.temp_c,
      humidity: currentWeather.current.humidity,
      precip: currentWeather.current.precip_mm,
    };
    if (favoriteCities.length < 5) {
      dispatch(weatherActions.addFavoriteCity(data));
    } else {
      alert("You can't add more than five city to your favorite list.");
    }
  };

  const handleRemoveFavoriteCity = (e) => {
    const data = favoriteCities.filter((city) => e.target.id !== city.id);
    dispatch(weatherActions.removeFavoriteCity(data));
  };

  return (
    <Container>
      <WelcomeMessage />
      <SearchForm />
      {Object.keys(currentWeather).length > 0 ? (
        <WeatherCard
          cityName={currentWeather.location.name}
          cityImage={cityImage?.response?.images[0].image.url}
          weatherIcon={currentWeather.current.condition.icon}
          description={currentWeather.current.condition.text}
          temperature={currentWeather.current.temp_c}
          humidity={currentWeather.current.humidity}
          precip={currentWeather.current.precip_mm}
          handleAddFavorite={handleAddFavorite}
        />
      ) : null}

      {favoriteCities.length > 0 && (
        <div className='favCitiesTitle'>Favorite Cities</div>
      )}
      <FavoriteCities>
        {favoriteCities.length > 0 ? (
          <>
            {favoriteCities.map((city) => (
              <WeatherCard
                key={city.id}
                cityId={city.id}
                cityName={city.cityName}
                cityImage={city.cityImage}
                description={city.description}
                weatherIcon={city.weatherIcon}
                temperature={city.temperature}
                humidity={city.humidity}
                precip={city.precip}
                handleRemoveFavoriteCity={handleRemoveFavoriteCity}
              />
            ))}
          </>
        ) : null}
      </FavoriteCities>
    </Container>
  );
};

export default HomePage;
