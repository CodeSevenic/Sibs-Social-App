﻿import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from './Loading';
import Toast from './Toast';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const Alert = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state;
  return (
    <div>
      {alert.loading && <Loading />}
      {alert.error && (
        <Toast
          msg={{ title: 'Error', body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="bg-danger"
        />
      )}
      {alert.success && (
        <Toast
          msg={{ title: 'Success', body: alert.success }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="bg-success"
        />
      )}
    </div>
  );
};

export default Alert;
