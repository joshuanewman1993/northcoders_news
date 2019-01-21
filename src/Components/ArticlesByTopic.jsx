import React, { Component } from 'react';
import * as api from '../Utils/api'
import { Link } from '@reach/router'

class ArticlesByTopic extends Component {
    state = {
        articles: []
    }
    render() {
        const articles = this.state.articles
        return (
            <ul>
                {
                    articles.map(article => {
                        const link = `/articles/${article.article_id}`
                        return <li>{article.title}<Link to={link}>{article.article_id}</Link></li>
                    })
                }
            </ul>
        );
    }
    componentDidMount() {
        this.fetchArticlesByTopic();
    }
    fetchArticlesByTopic = () => {
        const { slug } = this.props
        api.fetchArticlesByTopic(slug)
            .then(articles => {
                console.log(articles)
                this.setState(() => ({
                    articles: articles
                }))
            })
            .catch(err => console.log(err))
    }

}

export default ArticlesByTopic;
