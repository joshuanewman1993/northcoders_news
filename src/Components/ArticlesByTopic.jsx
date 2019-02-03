import React, { Component } from 'react';
import * as api from '../Utils/api'
import { Link, Router } from '@reach/router'
import AddArticle from './AddArticle';
import '../CSS/ArticlesByTopic.css';
import Error from './Error'
import throttle from 'lodash.throttle'


class ArticlesByTopic extends Component {
    state = {
        articles: [],
        hasError: false,
        isLoading: true,
        page: 1
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
                <h3>The latest trending articles...</h3>
                <Link to='/add-article'>Click here if you wish to add an article!</Link>

                <ul className='articlesByTopic'>
                    {

                        articles.map(article => {
                            const link = `/articles/${article.article_id}`
                            return <li className='articlesListByTopic' key={article.created_at}><Link to={link}><p className='title'>{article.title}</p>
                                <p>Posted by <b>{article.author}</b></p>
                                <p> into <b>{article.topic}</b></p>
                                <p>Votes: {article.votes}</p>
                            </Link>
                            </li>
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
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps, prevState) {
        const pageUpdated = prevState.page !== this.state.page
        if (pageUpdated) {
            this.fetchArticlesByTopic();
        }
    }
    fetchArticlesByTopic = () => {
        const { page } = this.state
        const { slug } = this.props
        api.fetchArticlesByTopic(slug, page)
            .then(articles =>
                this.setState((prevState) => ({
                    articles: [...prevState.articles, ...articles]
                })))
            .catch(err => {
                if (err.response.data.msg.includes('topic not found!')) {
                    this.setState({
                        isLoading: true
                    })
                } else {
                    this.setState({
                        hasError: err
                    })
                }
            })
    }
    handleScroll = throttle(() => {
        const distanceFromTop = window.scrollY
        const heightOfScreen = window.innerHeight
        const documentHeight = document.body.scrollHeight;
        console.log('here')
        if (distanceFromTop + heightOfScreen > documentHeight - 100) {
            this.setState(({ page }) => ({
                page: page + 1
            }))
        }
    }, 1500)

}

export default ArticlesByTopic;
