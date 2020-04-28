export const BASE_URL = 'http://valerystatinov.me/api';

export const request = async (url, method = 'GET', body) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Token: 'aha',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      console.log(res.status);
      return res.text();
    })
    .then((data) => (data ? JSON.parse(data) : {}))
    .catch((error) => alert(`Упс! Что-то пошло не так: ${error}`));
};
