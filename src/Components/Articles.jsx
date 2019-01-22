import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../Utils/api'

class Articles extends Component {
    state = {
        articles: [],
        page: 1
    }
    render() {
        const { articles, page } = this.state
        return (
            <div className='articles'>
                <ul>
                    {
                        articles.map(article => <li key={article.article_id}><Link to={`${article.article_id}`}>{article.title}</Link></li>)
                    }
                </ul>

                <button onClick={() => this.updatePageNumber(+1)} >Next</button>
                <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>Previous</button>

            </div>
        );
    }
    componentDidMount() {
        this.fetchArticles();
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
    updatePageNumber = (direction) => {
        this.setState(({ page }) => ({
            page: page + direction
        }))
    }
    resetPageNumber = () => {
        //this will reset page back to zero
    }
}

export default Articles;
