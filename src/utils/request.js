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
    })
    .catch(err => {
      console.log(err);
    });
}

export const jogRequest = (url, method, body) => {
  const options = {
    method,
    headers: new Headers({
      'content-type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }),
  };
  options.body = JSON.stringify(body);
  
  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};