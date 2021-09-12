import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

function postHabit(body, config) {
  return axios.post(BASE_URL, body, config);
}

function getHabits(config) {
  return axios.get(BASE_URL, config);
}

function deleteHabit(id, config) {
  return axios.delete(`${BASE_URL}/${id}`, config);
}

function getTodayHabits(config) {
  return axios.get(`${BASE_URL}/today`, config);
}

function postHabitAsCheck(id, config) {
  return axios.delete(`${BASE_URL}/${id}/check`, {}, config);
}

function postHabitAsUncheck(id, config) {
  return axios.delete(`${BASE_URL}/${id}/uncheck`, {}, config);
}

function getHabitsHistory(config) {
  return axios.get(`${BASE_URL}/history/daily`, config);
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
