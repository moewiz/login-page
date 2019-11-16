import React from 'react';
import {withRouter} from "react-router-dom";

import {HeaderWrapper} from "./styled";

const Header = (props) => {
  const logout = () => {
    // Auth.logout()
    props.history.push('/login');
  };

  return (
    <HeaderWrapper>
      <img src="/img/logo@2x.jpg" alt="logo" width={150}/>
      <div className="logout-block" onClick={logout}>
        <img src="/icons/active/logout@2x.png" alt="logo" width={20}/>
        <span>Logout</span>
      </div>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
