import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://patrickdu-mern-boilerplate.herokuapp.com/'
    : 'http://localhost:5001/';

const headers =
  process.env.NODE_ENV === 'production'
    ? {}
    : { 'Access-Control-Allow-Origin': 'http://localhost:5001/' };

// Set config defaults
const instance = axios.create({
  timeout: 1000,
  headers: headers,
});

export default instance;
