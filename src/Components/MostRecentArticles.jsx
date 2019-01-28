import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/MostRecentArticles.css';

class MostRecentArticles extends Component {
    state = {
        articles: [],
        limit: 4,
        sortBy: 'created_at'
    }
    render() {
        const { articles } = this.state
        return (
            <ul className='recentArticles'>
                {
                    articles.map(article => <li className='articlesList' key={article.article_id}>
                        <p>{article.title}</p>
                        <p>{article.topic}</p>
                        <p>{article.author}</p>

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

export default MostRecentArticles;