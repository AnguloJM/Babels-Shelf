import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './screens/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
