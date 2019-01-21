import React, { Component } from 'react';
import * as api from '../Utils/api'

class ArticlesByTopic extends Component {
    state = {
        articles: []
    }
    render() {
        return (
            <div>
                <h1>Articles by topic here...</h1>
            </div>
        );
    }
    componentDidMount() {
        this.fetchArticlesByTopic();
    }
    fetchArticlesByTopic = () => {
        const { slug } = this.props
        api.fetchArticlesByTopic(slug)
            .then(articles => {
                this.setState(() => ({
                    articles
                }), console.log('here', this.state))
            })
            .catch(err => console.log(err))
    }

}

export default ArticlesByTopic;
