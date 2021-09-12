/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import ThreeDotsLoader from '../shared/Loader';
import { postHabit } from '../../services/trackit';
import Week from '../shared/Week';
import weekDays from '../../assets/weekDays';

export default function CreateNewHabitBox({ setOpenNewHabitBox, renderMyHabits, config }) {
  const [habitName, setHabitName] = useState('');
  const [week, setWeek] = useState(weekDays);
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
    postHabit(body, config).then(() => {
      renderMyHabits();
    }).catch(() => {
      alert('occorreu um erro. por favor, tente novamente em instantes.');
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <HabitContainer>
      <input
        required
        placeholder="nome do hábito"
        value={habitName}
        onChange={(e) => { setHabitName(e.target.value); }}
      />
      <Week
        week={week}
        // eslint-disable-next-line react/jsx-no-bind
        updatedDays={updatedDays}
      />
      <div>
        <Cancel
          type="button"
          onClick={() => setOpenNewHabitBox(false)}
          src="/"
        >
          Cancel
        </Cancel>
        <SaveButton
          onClick={saveNewHabit}
          loading={loading}
        >
          { (loading)
            ? <ThreeDotsLoader />
            : 'Salvar'}
        </SaveButton>
      </div>
    </HabitContainer>
  );
}

const HabitContainer = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  min-height: 180px;
  padding: 18px 18px 15px 19px;
  border-radius: 5px;
  margin: 20px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  input {
    min-height: 45px;
    width: 100%;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 9px 11px 11px 11px;
    font-size: 20px;
    color: #666666;
  }
  position: relative;
  
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color: white;
    border-radius: 5px;
    position: absolute;
    right: 18px;
    bottom: 15px;
    font-size: 16px;
`;
const Cancel = styled.button`
    width: 84px;
    height: 35px;
    background-color: white;
    color: #52B6FF;
    border-radius: 5px;
    position: absolute;
    right: 120px;
    bottom: 15px;
    font-size: 16px;
`;
