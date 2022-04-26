import axios from 'axios';

export const getCurrentWeather = async (cityName) => {
  return await axios
    .get(`${process.env.REACT_APP_BASE_URI}${cityName}`)
    .then((res) => {
      if (!res) return null;
      return res;
    })
    .catch((err) => console.log(err));
};

export const getCityImage = async (cityName) => {
  return await axios
    .get(`${process.env.REACT_APP_CITY_IMAGE_BASE_URI}${cityName}`, {
      headers: {
        'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '094fb5e856mshb13a44c44398469p1f0e2fjsn07706f015321',
      },
    })
    .then((res) => {
      if (!res) return null;
      return res;
    })
    .catch((err) => console.log(err));
};

export default { getCurrentWeather, getCityImage };
