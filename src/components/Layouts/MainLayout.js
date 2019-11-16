import React from 'react';

import {MainLayoutWrapper, ContentLayout, MainContentLayout} from "./styled";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <MainLayoutWrapper>
      <Header />
      <ContentLayout>
        <Sidebar />
        <MainContentLayout>
          {children}
        </MainContentLayout>
      </ContentLayout>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
