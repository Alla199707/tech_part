// import Loader from 'components/Loader/Loader';
import { UserItem } from 'components/UserItem/UserItem';
import { useEffect, useState } from 'react';
import { List, LoadMoreButton } from './Users.styled';

export const Users = ({ users, setUsers }) => {
  const [sliceUser, setSliceUser] = useState(users.slice(1, 3));
  const [Page, setPage] = useState(3);
  const onClick = () => {
    setPage(Page + 3);
  };
  useEffect(() => {
    const addSliceUser = [...users].slice(0, Page);
    setSliceUser(addSliceUser);
  }, [Page, users]);
  return (
    <>
      <List>
        {sliceUser.map(user => {
          return <UserItem key={user.key} user={user} setUsers={setUsers} />;
        })}
      </List>
      {Page < 30 ? (
        <LoadMoreButton onClick={onClick}>Load more</LoadMoreButton>
      ) : (
        <h2>That's all</h2>
      )}
    </>
  );
};
