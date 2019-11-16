import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  height: 100%;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  background-color: #f2f5fa;
  border-radius: 5px;
  width: 350px;
  min-height: 400px;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  position: absolute;
  left: calc(50% - 50px);
  top: -50px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Information = styled.div`
`;

export const Title = styled.div`
  color: #333;
  font-size: 15px;
`;

export const Content = styled.div`
  margin-bottom: 15px;
  font-size: 13px;
`;
