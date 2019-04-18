import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-287fa.firebaseio.com/'
});

export default instance;
