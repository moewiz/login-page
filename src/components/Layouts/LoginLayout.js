import React from 'react';
import PropTypes from "prop-types";

import {BackgroundImage, LoginLayoutWrapper, MainForm, RightContent} from "./styled";

const LoginLayout = (props) => {
  const { isRegisterPage } = props;

  return (
    <LoginLayoutWrapper>
      <BackgroundImage isRegisterPage={isRegisterPage} />
      <RightContent>
        <img src="/img/logo@2x.jpg" alt="logo" width={200}/>
        <MainForm>{props.children}</MainForm>
      </RightContent>
    </LoginLayoutWrapper>
  );
};

LoginLayout.propTypes = {
  isRegisterPage: PropTypes.bool.isRequired,
};

export default LoginLayout;
