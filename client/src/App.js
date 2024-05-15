import { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
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

  const BrowserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Header />
        <Route index element={auth.token ? <Home /> : <Login />} />
        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:id" element={<PageRender />} />
      </Route>
    )
  );

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <>
      <Alert />
      <input type="checkbox" name="theme" id="theme" />
      <div className="App">
        <div className="main">
          <RouterProvider router={BrowserRouter} />
        </div>
      </div>
    </>
  );
}

export default App;
