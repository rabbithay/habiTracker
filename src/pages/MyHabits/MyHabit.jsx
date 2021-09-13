/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Week from '../shared/Week';
import { deleteHabit } from '../../services/trackit';
import useAuthConfig from '../../hook/authConfig';
import trash from '../../assets/img/trash.svg';

export default function MyHabit({ habit, renderMyHabits }) {
  const { name, days, id } = habit;
  const config = useAuthConfig();
  const daysOfWeek = [{ day: 'D', clicked: false },
    { day: 'S', clicked: false },
    { day: 'T', clicked: false },
    { day: 'Q', clicked: false },
    { day: 'Q', clicked: false },
    { day: 'S', clicked: false },
    { day: 'S', clicked: false }];

  daysOfWeek.forEach((d, i) => {
    days.forEach((j) => {
      if (i === j) {
        // eslint-disable-next-line no-param-reassign
        d.clicked = true;
      }
    });
  });
  async function reqDeleteHabit() {
    if (!confirm('realmente deseja deletar esse hábito? essa ação não pode ser desfeita!')) {
      return;
    }
    try {
      await deleteHabit(id, config);
      renderMyHabits();
    } catch (e) {
      alert('houve um erro ao processar a sua requisição, por favor tente novamente mais tarde');
    }
  }
  return (
    <HabitContainer>
      <div>
        <h1>{name}</h1>
      </div>
      <Week week={daysOfWeek} />
      <Trash onClick={() => reqDeleteHabit()} src={trash} />
    </HabitContainer>
  );
}
const HabitContainer = styled.div`
  width: 100%;
  height: 91px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 13px 10px 15px 15px;
  align-items: flex-start !important;
  position: relative;
  margin-top: 10px;
  h1{
    margin-bottom: 3px;
    color: #666666;
    font-size: 20px;
  }
`;
const Trash = styled.img`
  position: absolute;
  right: 10px;
  top: 13px;
`;
