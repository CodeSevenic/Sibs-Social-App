import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageRender from './customRouter/PageRender';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';

import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import PrivateRouter from './customRouter/PrivateRouter';

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <>
      <Alert />
      <input type="checkbox" name="theme" id="theme" />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          <Routes>
            <Route path="/" element={auth.token ? <Home /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRouter />}>
              <Route path="/:page" element={<PageRender />} />
              <Route path="/:page/:id" element={<PageRender />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
