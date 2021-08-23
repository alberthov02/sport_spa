import { getToken } from './localStorage';
export const request = (url) => {
  return fetch(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.response.jogs;
    });
}