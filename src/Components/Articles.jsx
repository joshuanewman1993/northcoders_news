import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../Utils/api'
import '../CSS/Articles.css'
import throttle from 'lodash.throttle'
import Error from './Error'


class Articles extends Component {
    state = {
        articles: [],
        page: 1,
        hasAllArticles: false,
        value: 'created_at',
        hasError: false
    }
    render() {
        const { articles, hasError } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div >
                <h3>The latest trending articles...</h3>
                <Link to='/add-article'>Click here if you wish to add an article!</Link>
                <div className='articles'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Sort the articles by:
                    <select value={this.state.value} onChange={this.handleChange}>
                                <option value='created_at'>Date Created</option>
                                <option value='votes'>Votes</option>
                            </select>
                        </label>
                        <input type='submit' value='Submit' />
                    </form>
                    <ul className='articlesUL'>
                        {
                            articles.map(article => <li className='articleItem' key={article.article_id}><Link to={`${article.article_id}`}>{article.title}
                                <p>Posted by {article.author} into {article.topic}</p>
                                <p>Votes: {article.votes}</p>
                            </Link></li>)
                        }
                    </ul>
                </div>

            </div >
        );
    }
    componentDidMount() {
        this.fetchArticles();
        window.addEventListener('scroll', this.handleScroll)
    }
    componentDidUpdate(prevProps, prevState) {
        const pageUpdated = prevState.page !== this.state.page
        if (pageUpdated) {
            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        const { page, value } = this.state
        api.fetchArticles(value, page)
            .then(articles =>
                this.setState((prevState) => ({
                    articles: [...prevState.articles, ...articles]
                })))
            .catch(err => this.setState({
                hasError: err
            }))

    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { value, page } = this.state;
        api.fetchArticles(value, page).then(articles =>
            this.setState(() => ({
                articles
            })))
            .catch(err => this.setState({
                hasError: err
            }))
    }


    handleScroll = throttle(() => {
        const distanceFromTop = window.scrollY
        const heightOfScreen = window.innerHeight
        const documentHeight = document.body.scrollHeight;

        if (distanceFromTop + heightOfScreen > documentHeight - 100) {
            this.setState(({ page }) => ({
                page: page + 1
            }))
        }
    }, 1500)

    resetPageNumber = () => {
        this.setState({
            page: 1,
            hasAllArticles: false
        });
    }
}

export default Articles;
