import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Importing
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

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Home} />
          <Route exact path='/overview' component={Overview} />
          <Route
            exact
            path='/player1-vs-player2'
            component={Player1VsPlayer2}
          />
          <Route exact path='/team1-vs-team2' component={Team1VsTeam2} />
          <Route exact path='/modify-users' component={ModifyUsers} />
          <Route exact path='/modify-teams' component={ModifyTeams} />
          <Route exact path='/teams' component={Teams} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
