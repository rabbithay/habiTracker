import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { postHabit } from '../../services/trackit';
import Week from '../shared/Week';

export default function CreateNewHabitBox({ setOpenNewHabitBox, renderMyHabits }) {
  const [habitName, setHabitName] = useState('');
  const [week, setWeek] = useState(Week);
  const [loading, setLoading] = useState(false);

  function updatedDays(day) {
    // eslint-disable-next-line no-param-reassign
    day.clicked = !day.clicked;
    setWeek([...week]);
  }
  function saveNewHabit(event) {
    event.preventDefault();
    setLoading(true);
    const selectedDays = [];
    week.forEach((d, i) => {
      if (d.clicked) {
        selectedDays.push(i);
      }
    });
    const body = {
      name: habitName,
      days: selectedDays,
    };
    postHabit(body).then(() => {
      renderMyHabits();
    }).catch(() => {
      alert('occorreu um erro. por favor, tente novamente em instantes.');
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <input
        placeholder="nome do hábito"
        value={habitName}
        onChange={(e) => { setHabitName(e.target.value); }}
      />
      <Week
        week={week}
        updatedDays={updatedDays}
      />
      <form onSubmit={saveNewHabit}>
        <a
          type="cancel"
          onClick={() => setOpenNewHabitBox(false)}
          src="/"
        >
          Cancel
        </a>
        <button
          type="submit"
          loading={loading}
        >
          { (loading)
            ? <Loader />
            : 'Salvar'}
        </button>
      </form>
    </>
  );
}
