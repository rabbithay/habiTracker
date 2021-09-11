import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Body } from '../../assets/StyledComponents';

export default function Today() {
  return (
    <>
      <Header />
      <Body>
        <h2>
          Segunda, 17/05
        </h2>
        <h3>Nenhum hábito concluído ainda</h3>
      </Body>
      <Menu />
    </>
  );
}
