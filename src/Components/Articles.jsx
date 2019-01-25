import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../Utils/api'
import '../CSS/Articles.css'
import throttle from 'lodash.throttle'

class Articles extends Component {
    state = {
        articles: [],
        page: 1,
        hasAllArticles: false,
        value: 'created_at'
    }
    render() {
        const { articles } = this.state
        return (
            <div >
                <h3>The lastest trending articles...</h3>
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
                            articles.map(article => <li className='articleItem' key={article.article_id}><Link to={`${article.article_id}`}>{article.title}</Link></li>)
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
        api.fetchArticles()
            .then(articles => {
                this.setState(() => ({
                    articles
                }))
            })
            .catch(err => console.log(err))

    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { value, page } = this.state;
        api.fetchArticles(value).then(articles => {
            this.setState(() => ({
                articles
            }))
        })
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
    }, 1000)

    resetPageNumber = () => {
        this.setState({
            page: 1,
            hasAllArticles: false
        }, this.fetchArticles);
    }
}

export default Articles;
