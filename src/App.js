import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Topics from './Components/Topics'
import Articles from './Components/Articles';
import Users from './Components/Users';
import ArticlesByTopic from './Components/ArticlesByTopic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Topics path="/topics" />
          <ArticlesByTopic path='/topics/:slug' />
          <Articles path='/articles' />
          <Users path='/users' />
        </Router>
      </div >
    );
  }
}

export default App;
