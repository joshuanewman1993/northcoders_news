import React, { Component } from 'react';
import './App.css';
import { Router, navigate } from '@reach/router'
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
import AddArticle from './Components/AddArticle';
import HomePage from './Components/HomePage';
import AddTopic from './Components/AddTopic';


class App extends Component {
  state = {
    user: {},
  }
  render() {
    const { user } = this.state
    return (
      <div className="App">
        <div className='inner'>
          <Login login={this.login} user={user}>
            <Header />
            {/* <p>Welcome {user.username}</p> */}
            <Logout logout={this.logOut} />
            <Nav user={user} />
            <Router>
              <HomePage path='/' />
              <Topics path='/topics/*' />
              <AddTopic path='/add-topic' />
              <ArticlesByTopic path='/topics/:slug/articles' />
              <Articles path='/articles' />
              <AddArticle path='/add-article' />
              <ArticlesByID path='/articles/:article_id' user={user} />
              <DeletedArticle path='/articles/deleted' />
              <Users path='/users' />
            </Router>
          </Login>
        </div>
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

  logOut = (event) => {
    console.log(event)
    localStorage.clear()
    this.setState({
      user: {}
    }, () => {
      // navigate here...
      navigate('/')
    })
  }
}



export default App;
