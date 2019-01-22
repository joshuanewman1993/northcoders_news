import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Topics from './Components/Topics'
import Articles from './Components/Articles';
import Users from './Components/Users';
import ArticlesByTopic from './Components/ArticlesByTopic';
import ArticlesByID from './Components/ArticlesById';
import Login from './Components/Login';
import * as api from './Utils/api'

class App extends Component {
  state = {
    user: {}
  }
  render() {
    const { user } = this.state
    return (
      <div className="App">
        <Login login={this.login} user={user}>
          <Header />
          <Nav />
          <Router>
            <Topics path="/topics" />
            <ArticlesByTopic path='/topics/:slug' />
            <Articles path='/articles' />
            <ArticlesByID path='/articles/:article_id' />
            <Users path='/users' />
          </Router>
        </Login>
      </div >
    );
  }

  login = (username) => {
    api.fetchUsers(username)
      .then(user => {
        this.setState({
          user: user
        })
      })
  }
}

export default App;
