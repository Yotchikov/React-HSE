import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import MainPage from './components/MainPage';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:projectId" component={ProjectPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
