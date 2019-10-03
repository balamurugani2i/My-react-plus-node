import { fromJS } from 'immutable';
const initialState = fromJS({
  user:{}
});

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'users':
      console.log('user----..>', action.payload);
      return state
        .set('user', action.payload);
    default:
      return state;
  }
};

export default userReducer;