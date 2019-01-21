import React, { Component } from 'react';
import * as api from '../Utils/api'

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
                        return <li>{article.title}</li>
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
