import React from 'react';
import {withRouter} from "react-router-dom";

import {HeaderWrapper} from "./styled";
import Auth from "../../utils/auth";

const Header = (props) => {
  const goHome = () => {
    props.history.push('/');
  };
  const logout = () => {
    Auth.logout();
    props.history.push('/login');
  };

  return (
    <HeaderWrapper>
      <img src="/img/logo@2x.jpg" alt="logo" width={150} onClick={goHome} className="logo"/>
      <div className="logout-block" onClick={logout}>
        <img src="/icons/active/logout@2x.png" alt="logo" width={20}/>
        <span>Logout</span>
      </div>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
