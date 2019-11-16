import React from 'react';

import {HeaderWrapper} from "./styled";

const Header = () => {
  const logout = () => {
    // Auth.logout()
    console.log("Auth.logout()")
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

export default Header;
