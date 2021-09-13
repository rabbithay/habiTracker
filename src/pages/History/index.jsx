import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function History() {
  return (
    <>
      <Header />
      <Body>
        <Top>
          <SubTitle><h2>Histórico</h2></SubTitle>
        </Top>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Body>
      <Menu />
    </>
  );
}
const Body = styled.div`
  padding: 70px 18px 40px 18px;
  background-color: #f2f2f2;
  width: 100%;
  height: calc(100vh - 70px); 

  p{
    color: #666;
    font-size: 18px;
    line-height: 22px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 77px;
`;

const SubTitle = styled.div`
  h2{
    font-size: 23px;
    color: #126BA5;
  }
`;
