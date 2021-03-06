import React, { Component } from 'react';
import * as api from '../Utils/api'
import CommentsByArticleId from './CommentsByArticleId';
import { Redirect } from '@reach/router'
import Voter from './Voter'
import '../CSS/ArticlesById.css'
import Error from './Error'

class ArticlesByID extends Component {
    state = {
        article: [],
        hidden: true,
        toDashboard: false,
        hasError: false,
        isLoading: true
    }
    render() {
        const { hasError, isLoading } = this.state
        if (this.state.toDashboard === true) {
            return <Redirect to='/articles/deleted' />
        }
        if (hasError) {
            return <Error err={hasError} />
        }
        if (isLoading) return <p>Loading...</p>
        const { article_id, author, title, body, topic, votes } = this.state.article
        const { user } = this.props
        return (

            <div className='articleById'>
                <h1>{title}</h1>
                <p>{author}</p>
                <p>{topic}</p>
                <p>{body}</p>
                <Voter votes={votes} article_id={article_id} />


                <button type='submit' onClick={this.deleteArticle} disabled={user.username !== author} >Delete Article</button>
                <br></br>
                <button type='submit' onClick={this.showComments}>View Comments</button>
                {
                    !this.state.hidden && <CommentsByArticleId article_id={article_id} user={user} author={author} />
                }
            </div>
        );
    }
    componentDidMount() {
        this.fetchArticlesById();
    }
    fetchArticlesById = () => {
        const { article_id } = this.props
        api.fetchArticlesById(article_id)
            .then(article =>
                this.setState(() => ({
                    article: article,
                    isLoading: false
                })))
            .catch(err => this.setState({
                hasError: err
            }))
    }
    showComments = () => {
        this.setState(state => ({
            hidden: !state.hidden
        }))
    }
    deleteArticle = () => {
        const { toDashboard } = this.state
        const { article_id } = this.state.article
        api.deleteArticle(article_id)
            .then(this.setState({
                toDashboard: !toDashboard
            }))
            .catch(err => this.setState({
                hasError: err
            }))

    }
}

export default ArticlesByID;
