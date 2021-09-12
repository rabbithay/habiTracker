/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function DayMarker({
  day, clicked, updatedDays, marker,
}) {
  return (

    <Day type="button" clicked={clicked} onClick={() => updatedDays(marker)}>
      <p>{day}</p>
    </Day>

  );
}

const Day = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 4px;
  border: ${(props) => ((props.clicked) ? 'none' : '1px solid #CFCFCF')};
  background-color: ${(props) => ((props.clicked) ? '#CFCFCF' : '#fff')};;
  p {
      color: ${(props) => ((props.clicked) ? '#fff' : '#dbdbdb')};
  }
`;
