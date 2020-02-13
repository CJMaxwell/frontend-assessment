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
import AuthenticatedRoute from './components/AuthenticatedRoute'

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="container">
          <Switch>
          <Route exact path="/">
            <LoginUser />
          </Route>
          <AuthenticatedRoute path="/projects">
            <Projects />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/locations">
            <Locations />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/new-project">
            <CreateProjects />
          </AuthenticatedRoute>
        </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
