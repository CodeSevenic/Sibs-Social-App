import { GLOBALTYPES } from '../actions/globalTypes';

const themeReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
