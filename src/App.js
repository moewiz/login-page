import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// Import Layouts
import MainLayout from "./components/Layouts/MainLayout";

// Import Pages
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";

const PrivateRoute = (props) => {
  return (
    <MainLayout>
      {props.children}
    </MainLayout>
  )
};

const NotFound = () => <Redirect to="/"/>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" name="Login" component={Login}/>
        <Route path="/register" name="Register" component={Register}/>
        <PrivateRoute exact path="/" name="Home" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default App;
