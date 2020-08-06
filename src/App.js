import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import Auth from "./pages/Auth/Auth";
import Battle from "./pages/Battle/Battle";
import "./App.module.scss";



function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/auth'} exact>
          <Auth/>
        </Route>
        <Route path={'/'} exact>
          <Battle/>
        </Route>
       <Redirect to='/auth'/>
      </Switch>
    </Router>
  );
}

export default App;
