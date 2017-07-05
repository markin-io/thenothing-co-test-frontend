import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';

import About from './about'

import Home from '../components/home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
