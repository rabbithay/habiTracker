import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import TrackIt from '../assets/img/TrackIt.svg';

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <TopBar>
      <img
        alt="TrackIt"
        src={TrackIt}
      />
      <Icon
        alt="user icon"
        src={user.image}
      />
    </TopBar>
  );
}

const TopBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0px;
    display: flex;
    padding: 0px 18px 0px 18px;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`;

const Icon = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 26px;
`;
