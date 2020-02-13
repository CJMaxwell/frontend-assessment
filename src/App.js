import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import client from './utils/client';
import LoginUser from './components/LoginUser';
import Projects from './components/Projects';
import Locations from './components/Locations';
import CreateProjects from './components/CreateProjects';

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="container">
          <Switch>
          <Route exact path="/">
            <LoginUser />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/new-project">
            <CreateProjects />
          </Route>
        </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
