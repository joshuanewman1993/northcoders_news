import React, { Component } from 'react';
import * as api from '../Utils/api'
import { Link, Router } from '@reach/router'
import AddArticle from './AddArticle';


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
                        return <li><Link to={link}>{article.title}</Link></li>
                    })
                }
                <Link to='/add-article'>Add Article</Link>
                <Router>
                    <AddArticle path='add-article' />
                </Router>
            </ul >

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
