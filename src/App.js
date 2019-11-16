import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// Import Layouts
import MainLayout from "./components/Layouts/MainLayout";
import LoginLayout from "./components/Layouts/LoginLayout";

// Import Pages
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";

const PublicRoute = (props) => {
  const {component: Component, ...rest} = props;
  return (
    <LoginLayout>
      <Component {...rest} />
    </LoginLayout>
  );
};

const PrivateRoute = (props) => {
  const {component: Component, ...rest} = props;
  return (
    <MainLayout>
      <Component {...rest} />
    </MainLayout>
  )
};

const NotFound = () => <Redirect to="/"/>;

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" name="Login" component={Login}/>
        <PublicRoute path="/register" name="Register" component={Register}/>
        <PrivateRoute exact path="/" name="Home" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default App;
