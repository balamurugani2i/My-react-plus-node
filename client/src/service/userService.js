import axios from 'axios/index';

// export default helloService = () => axios({
//   method: 'get',
//   url: '/api/',
//   data: {}
// });
export const getUsersService = () => axios({
  method: 'get',
  url: '/api/',
  data: {}
});

// module.exports = {
//   helloService,
//   getUsersService,
// }