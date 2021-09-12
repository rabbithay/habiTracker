import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyle';
import Percent from './context/Percentext';
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
  const [percent, setPercent] = useState(0);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/cadastro" exact component={SignUp} />
          <Percent.Provider value={{ percent, setPercent }}>
            <Route path="/habitos" exact component={MyHabits} />
            <Route path="/hoje" exact component={Today} />
            <Route path="/historico" exact component={History} />
          </Percent.Provider>
        </Switch>
      </UserContext.Provider>
    </Router>

  );
}

export default App;
