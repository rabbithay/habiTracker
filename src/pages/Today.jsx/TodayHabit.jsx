import React from 'react';
import { HabitContainer, CheckBox } from '../../assets/StyledComponents';

export default function TodayHabit() {
  return (

    <HabitContainer>
      <div>
        <h1>Ler 1 capítulo de livro</h1>
        <p>Sequência atual: 3 dias </p>
        <p>Seu recorde: 5 dias</p>
      </div>
      <CheckBox>
        v
      </CheckBox>
    </HabitContainer>
  );
}
