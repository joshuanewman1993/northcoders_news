import React, { Component } from 'react';
import * as api from '../Utils/api'

class CommentsByArticleId extends Component {
    state = {
        comments: []
    }
    render() {
        console.log('here', this.state.comments)
        const { comments } = this.state.comments
        return (
            <div>
                <h1>Comments</h1>

            </div>
        );
    }
    componentDidMount() {
        this.fetchCommentsByArticleId();
    }
    fetchCommentsByArticleId = () => {
        const { article_id } = this.props
        api.fetchCommentsByArticleId(article_id)
            .then(comments => {
                this.setState(() => ({
                    comments: comments
                }))
            })
            .catch(err => console.log(err))
    }
}

export default CommentsByArticleId;