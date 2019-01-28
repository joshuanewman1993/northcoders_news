import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/MostRecentArticles.css';
import Articles from './Articles';

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
                        <p className='title'>{article.title}</p>
                        <p>Posted into <b> {article.topic}</b></p>
                        <p>By <b>{article.author}</b></p>
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