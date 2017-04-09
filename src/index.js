import React from 'react';
import ReactDOM from 'react-dom';
import VisibleApp from './App';
import About from './components/about';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css'
import './index.css';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={VisibleApp}/>
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
