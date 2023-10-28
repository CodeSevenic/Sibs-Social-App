import React from 'react';
import { useSelector } from 'react-redux';

const Notify = () => {
  const state = useSelector((state) => state);
  const { notify } = state;
  return <div>{notify.loading && <h1>Loading...</h1>}</div>;
};

export default Notify;
