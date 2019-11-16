import React, {useEffect, useState} from 'react';
import {Avatar, Information, Content, ProfileWrapper, Title} from "./styled";
import AuthService from "../../services/Auth";
import Loading from "../Loading";

const Profile = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AuthService.getInfo().then(({data}) => {
      setInfo(data)
      setLoading(false);
    }).catch(e => {
      setLoading(false);
    });
  }, [])

  return (
    <ProfileWrapper>
      {loading ?
        <Loading/> :
        <>
          <Avatar>
            <img src="/img/dp@2x.jpg" alt="avatar"/>
          </Avatar>
          < Information>
            < Title> Full Name</Title>
            <Content>{info && info.name}</Content>
            <Title>Email address</Title>
            <Content>{info && info.email}</Content>
            <Title>Gender</Title>
            <Content>{info && info.gender === 0 ? 'Male' : 'Female'}</Content>
            <Title>Age</Title>
            <Content>{info && info.age} years</Content>
          </Information>
        </>
      }
    </ProfileWrapper>
  );
};

export default Profile;
