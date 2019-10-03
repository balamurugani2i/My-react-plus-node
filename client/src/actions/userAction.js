
  const getUser = () => ({
    type: 'getUserInit',
  });

  const getUserSuccess = (data) => ({
    type: 'users',
    payload: data
  });

  const getUserError = (error) => ({
    type: 'getUsererror',
    error:error
  });


  module.exports = {
    getUser,
    getUserSuccess,
    getUserError
  }
