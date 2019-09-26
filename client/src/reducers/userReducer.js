import { fromJS } from 'immutable';
const initialState = fromJS({
  user:{}
});

const userReducer = (state = initialState, action) => {

  console.log('check action ---->', action.payload);
  switch (action.type) {
    case 'user':
      return state
        .set('user', action.payload);
    default:
      return state;
  }
};

export default userReducer;