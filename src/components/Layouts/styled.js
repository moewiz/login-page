import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #666;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #f2f2f2;

  .logout-block {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      margin-left: 5px;
    }
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  height: calc(100vh - 56px);
`;

export const SidebarWrapper = styled.div`
  min-width: 250px;
  border-right: 1px solid #f2f2f2;
  padding: 20px;
  height: calc(100vh - 100px);
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin: 10px 0;
      div {
        padding: 10px 0;
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #666;
          img {
            margin-right: 10px;
          }
        }
        &.active {
          a {
            color: #009af9;
          }
        }
      }
    }
  }
`;

export const MainContentLayout = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fafbfd;
`;

export const LoginLayoutWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  
  a, .forget-pwd {
    color: #009af9;
  }
  
  a {
    text-decoration: none;
  }
`;

export const BackgroundImage = styled.div`
  flex: 70%;
  background-image: ${(props) => props.isRegisterPage ? 'url(/img/register-bg.jpg)' : 'url(/img/login-bg.jpg)'};
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
