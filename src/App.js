import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CodeEditor from './components/CodeEditor';
import Terminal from './components/Terminal';
import Preview from './components/Preview';

function App() {
  return (
    <Auth0Provider
      domain="dev-nkxx5zndeyf121bp.us.auth0.com"
      clientId="aJf0tUKvH3OYTG80bITaaEqFSpkS797o"
      redirectUri={window.location.origin}
    >
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor" component={CodeEditor} />
          <Route path="/terminal" component={Terminal} />
          <Route path="/preview" component={Preview} />
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
