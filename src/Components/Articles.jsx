import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../Utils/api'

class Articles extends Component {
    state = {
        articles: []
    }
    render() {
        const { articles } = this.state
        return (
            <div>
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
}

export default Articles;
