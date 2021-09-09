import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyles';
import UserContext from './context/UserContext';
import useLocalStorage from './hook/useLocalStorage';
import {
  History,
  MyHabits,
  SignIn,
  SignUp,
  Today,
} from './pages/index';

function App() {
  const [user, setUser] = useLocalStorage('@trackit-user', {});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/cadastro" exact component={SignUp} />
          <Route path="/habitos" exact component={MyHabits} />
          <Route path="/hoje" exact component={Today} />
          <Route path="/historico" exact component={History} />
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
