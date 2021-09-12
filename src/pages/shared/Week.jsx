/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import DayMarker from './Day';

export default function Week({ week, updatedDays }) {
  return (
    <WeekBox>
      {week.map((d) => (
        <DayMarker marker={d} updatedDays={updatedDays || (() => {})} />
      ))}
    </WeekBox>
  );
}

const WeekBox = styled.div`
  display: flex;
  flex-direction: row !important ;
  width: auto;
  margin: 8px 0px 65px 0px;
  flex-wrap: wrap;
`;
