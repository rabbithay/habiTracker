/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { postSignUp } from '../../services/user';
import { Login, Form } from '../../assets/StyledComponents';
import ThreeDotsLoader from '../../components/Loader';

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
    postSignUp(body).then(() => {
      history.push('/');
    }).catch(() => {
      alert('ocorreu um erro. por favor, tente novamente.');
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <Login>
      <img alt="logo" src={logo} />
      <Form onSubmit={(e) => { confirmLogin(e); }}>
        <input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <input
          required
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />
        <input
          required
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <input
          required
          type="url"
          placeholder="foto"
          value={image}
          onChange={(e) => { setImage(e.target.value); }}
        />
        <button type="submit" loading={loading}>
          {(loading) ? <ThreeDotsLoader /> : 'Cadastrar'}
        </button>
      </Form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Login>
  );
}
