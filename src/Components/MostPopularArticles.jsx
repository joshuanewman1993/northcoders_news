import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/MostPopularArticles.css';
import { Link } from '@reach/router'

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
                    articles.map(article => <li className='articlesList' key={article.article_id}>
                        <Link to={`articles/${article.article_id}`}>
                            <p className='title'>{article.title}</p>
                            <p>Posted into <b>{article.topic}</b></p>
                            <p>Votes: <b>{article.votes}</b> </p>
                            <p>By <b>{article.author}</b> | <b>{Math.floor(Math.random() * 100) + 1} </b>min read </p>
                        </Link>
                    </li>
                    )
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