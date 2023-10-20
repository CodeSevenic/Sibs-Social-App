import { TYPES } from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.AUTH:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
