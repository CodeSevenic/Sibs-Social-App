import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Notify = () => {
  const state = useSelector((state) => state);
  const { notify } = state;
  return <div>{notify.loading && <Loading />}</div>;
};

export default Notify;
