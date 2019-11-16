import React from 'react';

import {LoginLayoutWrapper} from "../Layouts/styled";
import {BackgroundImage} from "./styled";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <LoginLayoutWrapper>
      <BackgroundImage/>
      <LoginForm/>
    </LoginLayoutWrapper>
  );
};

export default Login;
