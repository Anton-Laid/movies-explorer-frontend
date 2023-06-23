import { MAIN_URL } from '../utils/constans';

const handelResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export const register = ({ name, email, password }) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  }).then(handelResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(handelResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data.token;
      }
    });
};

export const upDateUser = ({ email, name }) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ email, name }),
  }).then(handelResponse);
};

export const getContent = () => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(handelResponse);
};
