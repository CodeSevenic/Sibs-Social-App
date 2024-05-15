import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageRender from './PageRender';
import Home from './pages/home';
import Login from './pages/login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';

import Alert from './components/alert/Alert';
import Header from './components/Header';

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
            <Route path="/:page" element={<PageRender />} />
            <Route path="/:page/:id" element={<PageRender />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
