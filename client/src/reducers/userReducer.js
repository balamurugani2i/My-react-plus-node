import { fromJS } from 'immutable';
const initialState = fromJS({
  user:{}
});

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'users':
      return state
        .set('user', action.response);
    default:
      return state;
  }
};

export default userReducer;