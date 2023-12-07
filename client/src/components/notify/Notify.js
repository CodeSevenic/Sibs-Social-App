import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { notify } = state;
  return (
    <div>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ title: 'Error', body: notify.error }}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          bgColor="bg-danger"
        />
      )}
      {notify.success && (
        <Toast
          msg={{ title: 'Success', body: notify.success }}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          bgColor="bg-success"
        />
      )}
    </div>
  );
};

export default Notify;
