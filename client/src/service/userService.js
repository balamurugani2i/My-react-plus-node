import axios from 'axios/index';

const getUsersSaga = () => axios({
    method: 'get',
    url: '/api/',
    data: {}
  });

  module.exports = {
      getUsersSaga,
  }