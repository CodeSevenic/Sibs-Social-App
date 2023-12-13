import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageRender from './PageRender';
import Home from './pages/home';
import Login from './pages/login';
import { useDispatch, useSelector } from 'react-redux';

import Alert from './components/alert/Alert';
import { refreshToken } from './redux/actions/authAction';

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      <input type="checkbox" name="theme" id="theme" />
      <div className="App">
        <div className="main">
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route path="/:page" component={PageRender} />
          <Route path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
