import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export default {
  setupInterceptors: (store) => {

      axios.interceptors.response.use(response => {
        return response;
      }, error => {

      if (error.response.status === 401) {
        // store.dispatch(logoutUser());
      }

    //   if (error.response.status === 404) {
    //      history.push('/not-found');
    //   }

      return Promise.reject(error);
    });
  },
};