// import React, { useCallback } from 'react';
import logo from '../../image/logo.svg';
import background from '../../image/card.svg';
import {
  Wrapper,
  Logo,
  Line,
  Circle,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './UserItem.styled';
// import { updateTweets } from 'ApiUsers/ApiUsers';

export const UserItem = ({ user, setUsers }) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const { twets, followers, avatar, id, follow } = user;

  const setFollowing = id => {
    const usersFollow = users.map(user =>
      user.id === id
        ? {
            ...user,
            follow: !user.follow,
            followers: user.followers + 1,
          }
        : user
    );
    localStorage.setItem('users', JSON.stringify(usersFollow));
    setUsers(usersFollow);
  };

  const setUnfollowing = id => {
    const usersFollow = users.map(user =>
      user.id === id
        ? {
            ...user,
            follow: !user.follow,
            followers: user.followers - 1,
          }
        : user
    );
    localStorage.setItem('users', JSON.stringify(usersFollow));
    setUsers(usersFollow);
  };

  return (
    <Wrapper key={id}>
      <Logo src={logo} alt="GO-IT-logo" width="70px" height="20px" />
      <img src={background} alt="GO-IT-background" />
      <Line />
      <Circle />
      <Avatar
        src={avatar}
        alt={`${user} avatar`}
        width="100px"
        height="100px"
      />
      <Tweets>{twets} Tweets</Tweets>
      <Followers>{followers.toLocaleString('en-US')} Followers</Followers>
      {follow ? (
        <Button
          onClick={() => setUnfollowing(id)}
          type="button"
          style={{ backgroundColor: follow ? '#5CD3A8' : '#EBD8FF' }}
          id={id}
        >
          {<span>Following</span>}
        </Button>
      ) : (
        <Button
          onClick={() => setFollowing(id)}
          type="button"
          style={{ backgroundColor: follow ? '#5CD3A8' : '#EBD8FF' }}
          id={id}
        >
          {follow ? <span>Following</span> : <span>Follow</span>}
        </Button>
      )}
      {/* <ButtonNew
        type="button"
        value={follow}
        onClick={() => onClick(id, follow)}
      >
        {follow ? 'Following' : 'Follow'}
      </ButtonNew> */}
    </Wrapper>
  );
};
