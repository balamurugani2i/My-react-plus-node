
  const getUser = () => ({
    type: 'getUserInit',
  });

  const getUserSuccess = () => ({
    type: 'users',
  });

  const getUserError = () => ({
    type: 'getUsererror',
  });


  module.exports = {
    getUser,
    getUserSuccess,
    getUserError
  }
