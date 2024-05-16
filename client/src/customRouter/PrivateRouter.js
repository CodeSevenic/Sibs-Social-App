import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const token = localStorage.getItem('firstLogin');
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
