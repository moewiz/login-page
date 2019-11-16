import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Auth from "./utils/auth";

// Import Layouts
import MainLayout from "./components/Layouts/MainLayout";
import LoginLayout from "./components/Layouts/LoginLayout";

// Import Pages
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";
import Profile from "./components/Home/Profile";
import Dashboard from "./components/Home/Dashboard";

const PublicRoute = (props) => {
  const {component: Component, ...rest} = props;
  const isRegisterPage = props.name === 'Register';

  if (Auth.isLoggedIn()) {
    return <Redirect to="/" />;
  }

  return (
    <LoginLayout isRegisterPage={isRegisterPage}>
      <Component {...rest} />
    </LoginLayout>
  );
};

const PrivateRoute = (props) => {
  const {component: Component, ...rest} = props;

  if (Auth.isLoggedIn()) {
    return (
      <MainLayout>
        <Component {...rest} />
      </MainLayout>
    )
  }

  return <Redirect to="/login" />;
};

const NotFound = () => <Redirect to="/"/>;

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" name="Login" component={Login}/>
        <PublicRoute path="/register" name="Register" component={Register}/>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/" name="Home" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default App;
