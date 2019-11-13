import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EditPrimateTable from './components/EditPrimateTable';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'


const Root = () => {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/gestion' component={EditPrimateTable} />
          </Switch>
        </Router>
    )
  }

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
