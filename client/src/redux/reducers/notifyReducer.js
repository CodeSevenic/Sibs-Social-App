import { TYPES } from '../actions/authAction';

const initialState = {};

const notifyReducer = (state = initialState, action) => {
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

export default notifyReducer;
