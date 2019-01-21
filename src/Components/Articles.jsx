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
                <h1>Articles here</h1>
                {
                    articles.map(article => {
                        return <li>{article.title}</li>

                    })
                }
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
