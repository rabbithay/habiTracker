import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import logo from '../../assets/img/logo.svg';
import { postSignUp } from '../../services/user';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function confirmLogin(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      email, name, image, password,
    };
    postSignUp(body).then((res) => {
      console.log(res);
      history.push('/');
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
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <input
          type="text"
          placeholder="foto"
          value={image}
          onChange={(e) => { setImage(e.target.value); }}
        />
        <button type="submit" loading={loading}>
          {(loading) ? <Loader type="ThreeDots" color="#fff" height={13} width={51} /> : 'Cadastrar'}
        </button>
      </Form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
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
    opacity: ${(props) => (props.loading ? 0.6 : 1)};

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
