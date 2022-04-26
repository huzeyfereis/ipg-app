import { weatherActions } from './weatherSlice';
import weatherService from '../../services/weatherService';

export const { setCurrentWeather, setCityImage } = weatherActions;

export const fetchCurrentWeather = (cityName) => (dispatch) => {
  weatherService
    .getCurrentWeather(cityName)
    .then((response) => dispatch(setCurrentWeather(response.data)))
    .catch((err) => console.log(err));
};

export const fetchCityImage = (cityName) => (dispatch) => {
  weatherService
    .getCityImage(cityName)
    .then((response) => dispatch(setCityImage(response.data)))
    .catch((err) => console.log(err));
};
