import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Body } from '../../assets/StyledComponents';
import useAuthConfig from '../../hook/authConfig';
import { getTodayHabits } from '../../services/trackit';
import 'dayjs/locale/pt-br';
import TodayHabit from './TodayHabit';

export default function Today() {
  // eslint-disable-next-line global-require
  const dayjs = require('dayjs');
  const now = dayjs();

  const config = useAuthConfig();
  const [todayHabitList, setTodayHabitList] = useState([]);

  async function renderTodayHabit() {
    try {
      const response = await getTodayHabits(config);
      setTodayHabitList(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => { renderTodayHabit(); }, []);

  return (
    <div>
      <Header />
      <Body>
        <h2>{now.locale('pt-br').format('dddd, DD/MM')}</h2>
        <h3>Nenhum hábito concluído ainda</h3>
        {todayHabitList && todayHabitList.map((habit) => (
          <TodayHabit habit={habit} />
        ))}
      </Body>
      <Menu />
    </div>
  );
}
