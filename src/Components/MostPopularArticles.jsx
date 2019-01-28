import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/MostPopularArticles.css';


class MostPopularArticles extends Component {
    state = {
        articles: [],
        limit: 4,
        sortBy: 'votes'
    }
    render() {
        const { articles } = this.state
        return (
            <ul className='popularArticles'>
                {
                    articles.map(article => <li className='popularItem' key={article.article_id}>
                        <p>{article.title}</p>
                        <p>{article.topic}</p>
                        <p>{article.author}</p>
                        <p>{article.votes}</p>
                    </li>)
                }
            </ul>
        );
    }
    componentDidMount() {
        this.fetchMostRecent()
    }
    fetchMostRecent = () => {
        const { limit, sortBy } = this.state
        api.fetchMostRecent(limit, sortBy)
            .then(articles =>
                this.setState(() => ({
                    articles: articles
                })))
            .catch(err => {
                console.log(err)
            })
    }
}

export default MostPopularArticles;