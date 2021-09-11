import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Body, NewHabitButton } from '../../assets/StyledComponents';
import Menu from '../../components/Menu';

import { getHabits } from '../../services/trackit';

export default function MyHabits() {
  const [habitsList, setHabitsList] = useState([]);
  const [openNewHabitBox, setOpenNewHabitBox] = useState(false);

  function renderMyHabits() {
    getHabits().then((res) => {
      setHabitsList(res.data);
    }).catch((error) => {
      console.log(error.message);
      alert('ocorreu um erro. por favor, tente novamente mais tarde.');
    }).finally(() => {
      console.log(getHabits());
    });
  }

  useEffect(renderMyHabits, []);

  return (
    <>
      <Header />

      <Body>
        <div>
          <h2>
            Meus hábitos
          </h2>
          <NewHabitButton
            type="button"
            onClick={() => { setOpenNewHabitBox(true); }}
          >
            +
          </NewHabitButton>
        </div>
        {(openNewHabitBox) ? 'create new habit' : null}
        {(habitsList.length === 0)
          ? (
            <p>
              Você não tem nenhum hábito cadastrado ainda.
              Adicione um hábito para começar a trackear!
            </p>
          )
          : (habitsList.map(() => 'habito'))}
      </Body>

      <Menu />
    </>
  );
}
