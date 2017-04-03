import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/about';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css'
import './index.css';

ReactDOM.render(
  <Router>
      <div>
        <Header />

        <Route path="/" exact component={App}/>
        <Route path="/about" component={About} />
      </div>
    </Router>,
  document.getElementById('root')
);
