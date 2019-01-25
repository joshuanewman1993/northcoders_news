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
        hasError: false
    }
    render() {
        const { hasError } = this.state
        if (this.state.toDashboard === true) {
            return <Redirect to='/articles/deleted' />
        }
        if (hasError) {
            return <Error err={hasError} />
        }
        const { article_id, author, title, body, topic, votes } = this.state.article
        const { user } = this.props
        return (

            <div className='articleById'>
                <h1>{title}</h1>
                <p>Arti1cle ID: {article_id}</p>
                <p>Author: {author}</p>
                <p>Body : {body}</p>
                <p>Topic : {topic}</p>
                <Voter votes={votes} article_id={article_id} />


                <button type='submit' onClick={this.deleteArticle} disabled={user.username !== author} >Delete Article</button>
                <br></br>
                <button type='submit' onClick={this.showComments}>View Comments</button>
                {
                    !this.state.hidden && <CommentsByArticleId article_id={article_id} user={user} />
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
            .catch((err) => {
                console.log(err);
            })

    }
}

export default ArticlesByID;
