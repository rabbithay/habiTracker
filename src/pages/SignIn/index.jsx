import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import logo from '../../assets/img/logo.svg';
import UserContext from '../../context/UserContext';
import { postLogin } from '../../services/user';

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  if (user && user.token) {
    history.push('/hoje');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function confirmLogin(e) {
    e.preventDefault();
    setLoading(true);
    const body = { email, password };
    postLogin(body).then((res) => {
      setUser(res.data);
      history.push('/hoje');
    }).catch((error) => {
      console.log(error);
      alert('erro');
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <Login>
      <img alt="logo" src={logo} />
      <Form onSubmit={(e) => { confirmLogin(e); }}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />
        <button type="submit">
          {(loading)
            ? <Loader type="ThreeDots" color="#fff" height={13} width={51} />
            : 'Entrar'}
        </button>
      </Form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Login>
  );
}

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
