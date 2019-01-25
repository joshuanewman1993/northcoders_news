import React, { Component } from 'react';
import * as api from '../Utils/api'
import { Link, Router } from '@reach/router'
import AddArticle from './AddArticle';
import '../CSS/ArticlesByTopic.css';
import Error from './Error'


class ArticlesByTopic extends Component {
    state = {
        articles: [],
        hasError: false,
        isLoading: true
    }
    render() {
        const { hasError, isLoading } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        if (isLoading === false) return <p>No articles found..</p>
        const articles = this.state.articles
        return (
            <div>
                <h3>The lastest trending articles...</h3>
                <Link to='/add-article'>Click here if you wish to add an article!</Link>

                <ul className='articlesByTopic'>
                    {

                        articles.map(article => {
                            const link = `/articles/${article.article_id}`
                            return <li className='articlesListByTopic' key={article.article_id}><Link to={link}>{article.title}</Link></li>
                        })
                    }
                    <Router>
                        <AddArticle path='add-article' />
                    </Router>
                </ul >
            </div>
        );
    }
    componentDidMount() {
        this.fetchArticlesByTopic();
    }
    fetchArticlesByTopic = () => {
        const { slug } = this.props
        api.fetchArticlesByTopic(slug)
            .then(articles =>
                this.setState(() => ({
                    articles: articles
                })))
            .catch(err => {
                if (err.response.data.msg.includes('topic not found!')) {
                    this.setState({
                        isloading: false
                    })
                } else {
                    this.setState({
                        hasError: err
                    })
                }
            })
    }

}

export default ArticlesByTopic;
