import axios from 'axios';
require('dotenv').config();

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: process.env.API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;
