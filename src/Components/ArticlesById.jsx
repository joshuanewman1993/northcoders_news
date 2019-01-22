import React, { Component } from 'react';
import * as api from '../Utils/api'
import CommentsByArticleId from './CommentsByArticleId';
import { Redirect } from '@reach/router'

class ArticlesByID extends Component {
    state = {
        article: [],
        hidden: true,
        toDashboard: false
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/articles/deleted' />
        }
        const { article_id, author, title, body, topic, votes } = this.state.article
        return (
            <div>
                <h1>Articles by ID</h1>
                <p>Article ID: {article_id}</p>
                <p>Author: {author}</p>
                <p>Title: {title}</p>
                <p>Body : {body}</p>
                <p>Topic : {topic}</p>
                <p>Votes : {votes}</p>
                <button type='submit' onClick={this.showComments}>View Comments</button>
                <button type='submit' onClick={this.deleteArticle}>Delete Article</button>
                {
                    !this.state.hidden && <CommentsByArticleId article_id={article_id} />
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
            .then(article => {
                this.setState(() => ({
                    article: article
                }))
            })
            .catch(err => console.log(err))
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
            .catch((err) => {
                console.log(err);
            })

    }
}

export default ArticlesByID;
