import React from 'react';

import {MainLayoutWrapper, ContentLayout, MainContentLayout} from "./styled";
import Sidebar from "./Sidebar";
import Header from "./Header";
import {HomeWrapper} from "../Home/styled";

const MainLayout = ({children}) => {
  return (
    <MainLayoutWrapper>
      <Header/>
      <ContentLayout>
        <Sidebar/>
        <MainContentLayout>
          <HomeWrapper>
            {children}
          </HomeWrapper>
        </MainContentLayout>
      </ContentLayout>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
