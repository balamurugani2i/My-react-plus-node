import axios from 'axios';

const setupInterceptors = store => {
    // Default settings for axios request
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['x-origin-url'] = window.location.origin;
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.validateStatus = () => true;   
  
    axios.interceptors.request.use(
      config => config
      , error => Promise.reject(error),
    );
  
    axios.interceptors.response.use(response => {
      if (response.status >= 500) {
        console.log(response.data.error.message);
      } else if (response.status === 401) {
        console.log(response.data.error.message);
      } else if (response.status === 403) {
        console.log(response.data.error.message);
      } else if (response.status === 400) {
        console.log(response.data.error.message);
      } else if (response.status === 404) {
        console.log(response.data.error.message);
      } else if (response.status === 422) {
        console.log(response.data.error.message);
      } else if (response.status === 200 || response.status === 201 ||
        response.status === 202 || response.status === 204) {
        return response.data;
      } else {
        console.log(response.data.error.message);
      }
    }, error => Promise.reject(error));
  };

  export default setupInterceptors;
  