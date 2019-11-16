import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  background-color: #fafbfd;
`;

export const ContentLayout = styled.div`
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 4px;
`;

export const LoginLayoutWrapper = styled.div`
  display: flex;
  max-width: 1366px;
  margin: 0 auto;
  min-height: 768px;
  
  a, .forget-pwd {
    color: #009af9;
  }
  
  a {
    text-decoration: none;
  }
`;

export const BackgroundImage = styled.div`
  flex: 70%;
  background-image: url(/img/login-bg.jpg);
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RightContent = styled.div`
  flex: 30%;
  background-color: #fff;
  padding: 60px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

export const MainForm = styled.div`
  flex: 1;
  color: #333;
  display: flex;
  align-items: center;
`;
