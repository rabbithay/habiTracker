import React from 'react';
import styled from 'styled-components';
import Day from './Day';

export default function Week({ week, UpdatedDays }) {
  return (
    <Body>
      {week.map((d, i) => (
        <Day marker={d} day={d.day} clicked={d.clicked} i={i} UpdatedDays={UpdatedDays} />
      ))}
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: start;
  width: calc(100% - 36px);
  margin-top: 8px;
`;
