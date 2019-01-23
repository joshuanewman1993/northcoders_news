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
import DeletedArticle from './Components/DeletedArticle';
import Logout from './Components/Logout';


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
          <Logout logout={this.logOut} />
          <Nav />
          <Router>
            <Topics path='/topics/*' />
            <ArticlesByTopic path='/topics/:slug/articles' />
            <Articles path='/articles' />
            <ArticlesByID path='/articles/:article_id' />
            <DeletedArticle path='/articles/deleted' />
            <Users path='/users' />
          </Router>
        </Login>
      </div >
    );
  }
  componentDidMount() {
    const storedUser = localStorage.getItem('user')
    const parsedUser = JSON.parse(storedUser)
    if (this.state.user !== parsedUser) {
      this.setState(({
        user: parsedUser
      }))
    }
  }

  login = (username) => {
    api.fetchUsers(username)
      .then(user => {
        this.setState({
          user: user
        })
        localStorage.setItem('user', JSON.stringify(user))
      })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      user: {}
    })
  }
}



export default App;
