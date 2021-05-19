import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import Blog1 from './pages/Blog1'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/5pointtia">
        <Blog1 />
      </Route>
      <Route path="/tiedosta">
        <Blog2 />
      </Route>
      <Route path="/eroon">
        <Blog3 />
        <App />
      </Route>
    </Switch>
  </Router>
  
  , document.getElementById('root')
);
