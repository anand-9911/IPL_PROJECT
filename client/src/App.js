import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import store from './store';
import setToken from './utils/setToken';
import PrivateRoute from './routing/PrivateRoute';

//Importing from components
import Navigation from './components/layout/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/layout/Home';
import Overview from './components/Overview';
import ModifyTeams from './components/admin/ModifyTeams';
import ModifyUsers from './components/admin/ModifyUsers';
import Player1VsPlayer2 from './components/compare/Player1VsPlayer2';
import Team1VsTeam2 from './components/compare/Team1VsTeam2';
import Teams from './components/teams/Teams';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        <Alert />
        <section className='container'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/teams' component={Teams} />
            <PrivateRoute exact path='/overview' component={Overview} />
            <PrivateRoute
              exact
              path='/player1-vs-player2'
              component={Player1VsPlayer2}
            />
            <PrivateRoute
              exact
              path='/team1-vs-team2'
              component={Team1VsTeam2}
            />
            <PrivateRoute exact path='/modify-users' component={ModifyUsers} />
            <PrivateRoute exact path='/modify-teams' component={ModifyTeams} />
          </Switch>
        </section>
      </Router>
    </>
  );
}

export default App;
