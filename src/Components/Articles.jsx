import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../Utils/api'

class Articles extends Component {
    state = {
        articles: [],
        page: 1,
        value: ''
    }
    render() {
        const { articles } = this.state
        return (
            <div className='articles'>
                <form onSubmit={this.handleSubmit}>
                    <label>Select how to query the articles :
                    <select value={this.state.value} onChange={this.handleChange}>
                            <option value='date_created'>Date Created</option>
                            <option value='comment_count'>Comment Count </option>
                            <option value='votes'>Votes</option>
                        </select>
                    </label>
                    <input type='submit' value='Submit' />
                </form>
                <ul>
                    {
                        articles.map(article => <li key={article.article_id}><Link to={`${article.article_id}`}>{article.title}</Link></li>)
                    }
                </ul>

            </div>
        );
    }
    componentDidMount() {
        this.fetchArticles();
        // window.addEventListener('scroll', handleScroll)
    }
    componentDidUpdate(prevProps, prevState) {
        const pageUpdated = prevState.page !== this.state.page
        if (pageUpdated) {
            this.fetchArticles();
        }
        //if topic has changed in state then call the reset page number
    }

    fetchArticles = () => {
        const { page } = this.state
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
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { value } = this.state;
        api.fetchArticles(value)
    }

    // updatePageNumber = (direction) => {
    //     this.setState(({ page }) => ({
    //         page: page + direction
    //     }))
    // }
    // resetPageNumber = () => {
    //     //this will reset page back to zero
    // }
    // handleScroll = throttle(() => {
    //     const distanceFromTop = window.scrollY
    //     const heightOfScreen = window.innerHeight
    //     const documentHeight = document.body.scrollHeight;
    //     if (distanceFromTop + heightOfScreen > documentHeight - 100) {
    //         //npm i lodash throttle
    //         this.setState(({ page }) => ({
    //             page: page + 1
    //         }))
    //     }
    // }, 3000)
}

export default Articles;
