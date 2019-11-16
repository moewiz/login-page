import React from 'react';

import { MainLayoutWrapper, ContentLayout} from "./styled";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <MainLayoutWrapper>
      <Sidebar />
      <ContentLayout>
        {children}
      </ContentLayout>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
