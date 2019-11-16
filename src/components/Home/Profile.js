import React from 'react';
import {Avatar, Information, Content, ProfileWrapper, Title} from "./styled";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Avatar>
        <img src="/img/dp@2x.jpg" alt="avatar"/>
      </Avatar>
      <Information>
        <Title>Full Name</Title>
        <Content>Shane Hughes</Content>
        <Title>Email address</Title>
        <Content>xroob@hotmail.com</Content>
        <Title>Gender</Title>
        <Content>Male</Content>
        <Title>Age</Title>
        <Content>28 years</Content>
      </Information>
    </ProfileWrapper>
  );
};

export default Profile;
