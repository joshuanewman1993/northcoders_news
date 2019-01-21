import React, { Component } from 'react';
import * as api from '../Utils/api'
import CommentsByArticleId from './CommentsByArticleId';

class ArticlesByID extends Component {
    state = {
        articles: [],
        hidden: true
    }
    render() {
        const { article_id, author, title, body, topic, votes } = this.state.articles
        return (
            <div>
                <h1>Articles by ID</h1>
                <p>Article ID: {article_id}</p>
                <p>Author: {author}</p>
                <p>Title: {title}</p>
                <p>Body : {body}</p>
                <p>Topic : {topic}</p>
                <p>Votes : {votes}</p>
                <button Type='submit' onClick={this.showComments}>View Comments</button>
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
            .then(articles => {
                this.setState(() => ({
                    articles: articles
                }))
            })
            .catch(err => console.log(err))
    }
    showComments = () => {
        this.setState(state => ({
            hidden: !state.hidden
        }))
    }
}

export default ArticlesByID;
