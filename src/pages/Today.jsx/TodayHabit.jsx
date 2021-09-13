/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { HabitContainer } from '../../assets/StyledComponents';
import check from '../../assets/img/check.svg';
import { postHabitAsCheckOrUncheck } from '../../services/trackit';

export default function TodayHabit({ habit, config, renderTodayHabit }) {
  const {
    name, currentSequence, highestSequence, done, id,
  } = habit;

  function setHabitAsDone() {
    const action = (done) ? 'uncheck' : 'check';
    postHabitAsCheckOrUncheck(id, config, action).catch(() => {
      alert('ocorreu um erro. por favor, tente novamente.');
    }).finally(() => {
      renderTodayHabit();
    });
  }
  const record = (currentSequence === highestSequence && currentSequence > 0);

  return (

    <HabitContainer>
      <div>
        <h1>{name}</h1>
        <CurrentSequence done={done}>
          Sequência atual:
          {' '}
          {currentSequence}
          {' '}
          dias
          {' '}
        </CurrentSequence>
        <CurrentSequence done={record}>
          Seu recorde:
          {' '}
          {highestSequence}
          {' '}
          dias
        </CurrentSequence>
      </div>
      <CheckBox done={done} onClick={() => { setHabitAsDone(); }}>
        <img alt="check" src={check} />
      </CheckBox>
    </HabitContainer>
  );
}

const CheckBox = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${(props) => ((props.done) ? '#8FC549' : '#EBEBEB')};
  border: 1px solid #E7E7E7;
  border-radius: 5px;
`;

const CurrentSequence = styled.p`
  color: ${(props) => ((props.done) ? '#8FC549' : '#666')} !important;
`;
