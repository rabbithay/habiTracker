import axios from 'axios';
import authConfig from '../hook/authConfig';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

function postHabit({ body }) {
  return axios.post(BASE_URL, body, authConfig);
}

function getHabits() {
  console.log(authConfig);
  return axios.get(BASE_URL, authConfig);
}

function deleteHabit({ id }) {
  return axios.delete(`${BASE_URL}/${id}`, authConfig);
}

function getTodayHabits() {
  return axios.get(`${BASE_URL}/today`);
}

function postHabitAsCheck({ id }) {
  return axios.delete(`${BASE_URL}/${id}/check`, authConfig);
}

function postHabitAsUncheck({ id }) {
  return axios.delete(`${BASE_URL}/${id}/uncheck`, authConfig);
}

function getHabitsHistory() {
  return axios.get(`${BASE_URL}/history/daily`, authConfig);
}

export {
  postHabit,
  getHabits,
  deleteHabit,
  getTodayHabits,
  postHabitAsCheck,
  postHabitAsUncheck,
  getHabitsHistory,
};
