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
  padding: 98px 18px 98px 18px;
  h2 {
      font-size: 23px;
      color: #126BA5;
    }
  h3{
      font-size: 18px;
      color: ${(props) => (props.color ? '#8FC549' : '#BABABA')};
      margin-bottom: 28px;
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

const HabitContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 90px;
  background-color: white;
  color: #666666;
  border-radius: 5px;
  h1{
    font-size: 20px;
    margin-bottom: 7px;
  }
  padding: 13px 13px 13px 15px;
  p{
    font-size: 13px;
  }
  display: flex;
  justify-content: space-between;
  div {
    flex-direction: column;
    align-items: flex-start;
  }
  input{
    width: 100% - 36px;
    min-height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 9px 11px 11px 11px;
    color: #666666;
    font-size: 20px;

    ::placeholder{
      font-size: 20px;
    }
  }
  margin-bottom: 10px;

`;
const Subheading = styled.div`
  margin-bottom: 20px;
`;
export {
  Login, Form, Body, HabitContainer, Subheading,
};
