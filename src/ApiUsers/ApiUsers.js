// import axios from 'axios';

const URL = 'https://645399b1c18adbbdfea1e9f0.mockapi.io/users';
export const getUser = () => {
  return fetch(URL, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
};

// export const updateTweets = async (id, followers, following) => {
//   try {
//     const data = await axios.put(`/users/${id}`, {
//       followers,
//       following,
//     });

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
