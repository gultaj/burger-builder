import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
  params: {
    //   key: 'AIzaSyCW14faVxPQv4VDzUwFxeF8HIJ2u9qxjmI'
    key: process.env.REACT_APP_FIREBASE_API_KEY
  }
});

console.log(process.env.FIREBASE_API_KEY);

export default instance;
