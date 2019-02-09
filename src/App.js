import React, { Component } from 'react';
import './App.css';
import { Router, navigate } from '@reach/router'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Topics from './Components/Topics'
import Articles from './Components/Articles';
import Users from './Components/Users';
import ArticlesByTopic from './Components/ArticlesByTopic';
import ArticlesById from './Components/ArticlesById';
import Login from './Components/Login';
import * as api from './Utils/api'
import DeletedArticle from './Components/DeletedArticle';
import Logout from './Components/Logout';
import AddArticle from './Components/AddArticle';
import HomePage from './Components/HomePage';
import AddTopic from './Components/AddTopic';
import Footer from './Components/Footer';
import AddedArticle from './Components/AddedArticle';


class App extends Component {
  state = {
    user: {},
  }
  render() {
    const { user } = this.state
    return (
      <div className="App">
        <Login login={this.login} user={user}>
          <Header user={user} logout={this.logOut} />
          <Nav user={user} />
          <Router>
            <HomePage path='/' />
            <Topics path='/topics/*' />
            <AddTopic path='/add-topic' />
            <ArticlesByTopic path='/topics/:slug/articles' />
            <Articles path='/articles' />
            <AddArticle path='/add-article' user={user} />
            <ArticlesById path='/articles/:article_id' user={user} />
            <DeletedArticle path='/articles/deleted' />
            <AddedArticle path='/articles/added' />
            <Users path='/users' />
          </Router>
        </Login>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)

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

  logOut = (event) => {
    console.log(event)
    localStorage.clear()
    this.setState({
      user: {}
    }, () => {
      navigate('/')
    })
  }
}



export default App;
