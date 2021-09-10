import React, { useContext } from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import Percent from '../context/Percentext';

export default function Menu() {
  const { percent } = useContext(Percent);
  return (

    <Bar>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
        <TodayButton>
          <CircularProgressbar
            value={percent}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: '#52B6FF',
              textColor: '#fff',
              pathColor: '#fff',
              trailColor: 'transparent',
            })}
          />
        </TodayButton>
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </Bar>
  );
}

const Bar = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    display: flex;
    padding: 0px 36px 0px 36px;
    align-items: center;
    justify-content: space-between;
    color: #52B6FF;
    font-size: 18px;
    z-index: 1;
`;
const TodayButton = styled.div`
    width: 91px;
    height: 91px;
    z-index: 3;
    /* margin-bottom: 40px; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
    position: fixed;
    bottom: 10px;
    right: calc((100vw - 91px)/2);
    font-size: 18px;
`;
