import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '33ab8887535c1b841abbb3411fd85c63'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/'

const getMovies = async (searchKey) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language: 'en-US'
      },
    });
    const movies = response.data.results;

    return movies;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: '1'
      },
    });
    const popularMovies = response.data.results;

    return popularMovies;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: '1',
      },
    });
    const nowPlaying = response.data.results;

    return nowPlaying;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getTopRated = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/top_rated`, {
      params:{
        api_key: API_KEY,
        language: 'en-US',
        page: '1',
      },
    });
    const topRated = response.data.results;

    return topRated;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMovieGenres = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const { genres } = response.data;
    const genreNames = genres.map((genre) => genre.name);
    return genreNames;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMovieCountry = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const { production_countries } = response.data;
    const country = production_countries[0]?.name || null;
    return country;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMoviesListGenres = async () => {
  try {
    const response = await axios.get(`${API_URL}/genre/movie/list`, {
      params:{
        api_key: API_KEY,
        language: 'en-US',
      }
    })
    // const genresList = response.data.genres
    return response;
  } catch (error) {
        console.error(error);
    throw error;
  }
}

const getSmallImage = (path) => {
  return IMAGE_PATH + "w500" + path;
};

const getImageOriginal = (path) => {
  return IMAGE_PATH + "original" + path;
};

export {
  getMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getTopRated,
  getMovieGenres,
  getMovieCountry,
  getMoviesListGenres,
  getSmallImage,
  getImageOriginal,
};