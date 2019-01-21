import React, { Component } from 'react';
// import { Link } from '@reach/router'

import * as api from '../Utils/api'

class ArticlesByID extends Component {
    state = {
        articles: []
    }
    render() {
        const { articles } = this.state
        return (
            <div>
                <h1>ARTICLE BY ID</h1>

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

export default ArticlesByID;
