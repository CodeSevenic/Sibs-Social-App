export const TYPES = {
  AUTH: 'AUTH',
};

export const login = (data) => (dispatch) => {
  try {
    dispatch({
      type: TYPES.AUTH,
      payload: {
        loading: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
