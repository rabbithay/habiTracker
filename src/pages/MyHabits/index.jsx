/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { getHabits } from '../../services/trackit';
import Header from '../../components/Header';
import { Body, NewHabitButton } from '../../assets/StyledComponents';
import Menu from '../../components/Menu';
import useAuthConfig from '../../hook/authConfig';
import CreateNewHabitBox from './CreateNewHabitBox';
import MyHabit from './MyHabit';

export default function MyHabits() {
  const [habitsList, setHabitsList] = useState([]);
  const [openNewHabitBox, setOpenNewHabitBox] = useState(false);
  const config = useAuthConfig();

  async function renderMyHabits() {
    try {
      const response = await getHabits(config);
      setHabitsList(response.data);
    } catch (e) {
      console.log(e);
    }
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
        {(openNewHabitBox) ? <CreateNewHabitBox setOpenNewHabitBox={setOpenNewHabitBox} config={config} /> : '' }

        {(habitsList.length === 0)
          ? (
            <p>
              Você não tem nenhum hábito cadastrado ainda.
              Adicione um hábito para começar a trackear!
            </p>
          )
          : habitsList.map((h) => <MyHabit habit={h} renderMyHabits={renderMyHabits} />)}
      </Body>
      <Menu />
    </>
  );
}
