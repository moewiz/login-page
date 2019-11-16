import React from 'react';

import {BackgroundImage, LoginLayoutWrapper, MainForm, RightContent} from "./styled";

const LoginLayout = (props) => {
  return (
    <LoginLayoutWrapper>
      <BackgroundImage />
      <RightContent>
        <img src="/img/logo@2x.jpg" alt="logo" width={200}/>
        <MainForm>{props.children}</MainForm>
      </RightContent>
    </LoginLayoutWrapper>
  );
};

export default LoginLayout;
