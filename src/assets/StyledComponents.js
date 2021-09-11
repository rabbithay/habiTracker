import styled from 'styled-components';

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 36px 0px 36px;
  img {
    width: 180px;
    height: 180px;
  }
  a{
    font-size: 14px;
    color: #52B6FF;
    text-decoration-line: underline;
  }
  
`;

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  margin: 32px 0 25px 0;
  input {
    width: calc(100vw - 72px);
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 18px;
    display: flex;
    align-items: center;
    font-size: 18px;
    ::placeholder {
      color: #7b7f83;
    }
  }
  button {
    width: calc(100vw - 72px);
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    .disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    :active {
      transform: translateX(1px);
      transform: translateY(1px);
    }
  }
  
`;

const Body = styled.div`
  background-color: #E5E5E5;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  padding: 98px 18px 70px 18px;
  h2 {
      font-size: 23px;
      color: #126BA5;
  }
  h3{
      font-size: 18px;
      color: #BABABA;
      /* color: #8FC549; */
  }
  p{
      font-size: 18px;
      color: #666;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

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

export {
  Login, Form, Body, NewHabitButton,
};
