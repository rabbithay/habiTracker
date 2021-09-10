import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import logo from '../../assets/img/logo.svg';
import { postSignUp } from '../../services/user';
import { Login, Form } from '../../assets/StyledComponents';

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
