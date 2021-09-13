/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import styled from 'styled-components';
import ThreeDotsLoader from '../shared/Loader';
import { postHabit } from '../../services/trackit';
import Week from '../shared/Week';

export default function CreateNewHabitBox({
  setOpenNewHabitBox, renderMyHabits, config, habitName, setHabitName, week, setWeek,
}) {
  const [loading, setLoading] = useState(false);

  function updatedDays(day) {
    day.clicked = !day.clicked;
    setWeek([...week]);
  }
  function saveNewHabit() {
    setLoading(true);
    const selectedDays = week.filter((d) => (d.clicked)).map((d, i) => i);
    const body = {
      name: habitName,
      days: selectedDays,
    };
    postHabit(body, config).then(() => {
      renderMyHabits();
    }).finally(() => {
      setLoading(false);
    });
    setOpenNewHabitBox(false);
  }
  function cancelButton() {
    setOpenNewHabitBox(false);
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
        updatedDays={updatedDays}
        loading={loading}
      />
      <div>
        <Cancel
          type="button"
          onClick={() => cancelButton()}
        >
          Cancel
        </Cancel>
        <SaveButton
          onClick={() => saveNewHabit()}
          disable={loading}
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
  /* margin: 20px 0px 30px 0px; */
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
    display: flex;
    align-items: center;
    justify-content: center;
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
