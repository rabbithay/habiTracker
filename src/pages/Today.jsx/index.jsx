/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Body } from '../../assets/StyledComponents';
import useAuthConfig from '../../hook/authConfig';
import { getTodayHabits } from '../../services/trackit';
import 'dayjs/locale/pt-br';
import TodayHabit from './TodayHabit';
import Percent from '../../context/Percentext';

export default function Today() {
  // eslint-disable-next-line global-require
  const dayjs = require('dayjs');
  const now = dayjs();

  const config = useAuthConfig();
  const { percent, setPercent } = useContext(Percent);

  const [todayHabitList, setTodayHabitList] = useState([]);
  const [doneHabits, setDoneHabits] = useState(0);

  function calculatePercent(howManyHabits) {
    setPercent((doneHabits / howManyHabits) * 100).tofixed(2);
  }

  function calculateDoneHabits(habits) {
    let i = 0;
    habits.forEach((habit) => {
      if (habit.done) {
        i++;
      }
    });
    setDoneHabits(i);
    calculatePercent(todayHabitList.length);
  }

  function renderTodayHabit() {
    getTodayHabits(config).then((response) => {
      setTodayHabitList(response.data);
      calculateDoneHabits(response.data);
    }).catch(() => {
      // none
    });
  }

  useEffect(() => { renderTodayHabit(); }, [percent, doneHabits]);

  return (
    <div>
      <Header />
      <Body color={doneHabits}>
        <h2>{now.locale('pt-br').format('dddd, DD/MM')}</h2>
        {(doneHabits)
          ? (
            <h3>
              {Math.round(Number(percent, 10))}
              % dos hábitos concluídos
            </h3>
          )
          : <h3>Nenhum hábito concluído ainda</h3>}
        {todayHabitList && todayHabitList.map((habit) => (
          <TodayHabit
            key={habit.id}
            habit={habit}
            config={config}
            renderTodayHabit={renderTodayHabit}
          />
        ))}
      </Body>
      <Menu />
    </div>
  );
}
