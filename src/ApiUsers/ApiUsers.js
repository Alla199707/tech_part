const URL = 'https://645399b1c18adbbdfea1e9f0.mockapi.io/users';
export const getUser = () => {
  return fetch(URL, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
};
