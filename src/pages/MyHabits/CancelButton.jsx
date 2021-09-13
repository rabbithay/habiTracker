/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';

export default function CancelButton({ setOpenNewHabitBox }) {
  return (
    <Cancel
      type="button"
      onClick={() => setOpenNewHabitBox(false)}
      src="/"
    >
      Cancel
    </Cancel>
  );
}
const Cancel = styled.button`
    width: 84px;
    height: 35px;
    background-color: white;
    color: #52B6FF;
    border-radius: 5px;
    position: absolute;
    right: 120px;
    bottom: 15px;
    font-size: 16px;
`;
