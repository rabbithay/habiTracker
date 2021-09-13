/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHabits } from '../../services/trackit';
import Header from '../../components/Header';
import { Body, Subheading } from '../../assets/StyledComponents';
import Menu from '../../components/Menu';
import useAuthConfig from '../../hook/authConfig';
import CreateNewHabitBox from './CreateNewHabitBox';
import MyHabit from './MyHabit';

export default function MyHabits() {
  const [habitsList, setHabitsList] = useState([]);
  const [openNewHabitBox, setOpenNewHabitBox] = useState(false);
  const config = useAuthConfig();

  function renderMyHabits() {
    getHabits(config).then((response) => {
      setHabitsList(response.data);
    }).catch((e) => {
      console.log(e);
    });
  }
  useEffect(() => { renderMyHabits(); }, []);

  return (
    <>
      <Header />
      <Body>
        <Subheading>
          <h2>
            Meus hábitos
          </h2>
          <NewHabitButton
            type="button"
            onClick={() => { setOpenNewHabitBox(true); }}
          >
            +
          </NewHabitButton>
        </Subheading>
        {(openNewHabitBox)
          && (
            <CreateNewHabitBox
              renderMyHabits={renderMyHabits}
              setOpenNewHabitBox={setOpenNewHabitBox}
              config={config}
            />
          ) }

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
const NewHabitButton = styled.button`
  width: 40px;
  height: 35px;
  background-color: #52B6FF;
  color: white;
  font-size: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
