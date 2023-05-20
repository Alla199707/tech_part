import { getUser } from 'ApiUsers/ApiUsers';
import { GoBack } from 'components/GoBack/GoBack';
import { Users } from 'components/Users/Users';
import { useEffect, useState } from 'react';

function TweetPage() {
  const [users, setUsers] = useState([]);

  const usersStorage = JSON.parse(localStorage.getItem('users'));

  useEffect(() => {
    getUser()
      .then(result => {
        if (result.ok) {
          return result.json();
        }
      })
      .then(data => {
        const formattingUsers = data.map(item => ({
          ...item,
          follow: false,
        }));

        setUsers(formattingUsers);

        if (usersStorage === null) {
          localStorage.setItem('users', JSON.stringify(formattingUsers));
        }
      })
      .catch(error => console.log(error));
  });
  return (
    <main>
      <GoBack />
      <Users users={usersStorage ?? users} setUsers={setUsers} />
    </main>
  );
}

export default TweetPage;
