import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import logo from '../../assets/img/logo.svg';
import UserContext from '../../context/UserContext';
import { postLogin } from '../../services/user';
import { Login, Form } from '../../assets/StyledComponents';

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
