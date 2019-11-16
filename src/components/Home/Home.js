import React from 'react';

import Dashboard from "./Dashboard";
import Profile from "./Profile";

const Home = (props) => {
  switch (props.path) {
    case '/profile':
      return <Profile/>;
    default:
      return <Dashboard {...props} />;
  }
};

export default Home;
