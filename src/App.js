import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const Index = React.lazy(() => import('./pages/index'));

// Pages
const Login = React.lazy(() => import('./pages/Login/Login'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const Page404 = React.lazy(() => import('./pages/Page404/Page404'));
const Page500 = React.lazy(() => import('./pages/Page500/Page500'));

function App() {
  return (
    <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <Index {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
  );
}

export default App;
