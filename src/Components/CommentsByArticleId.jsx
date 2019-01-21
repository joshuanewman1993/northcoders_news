import React, { Component } from 'react';
import * as api from '../Utils/api'

class CommentsByArticleId extends Component {
    state = {
        comments: []
    }
    render() {
        const { author, body, comment_id, created_at, votes } = this.state.comments
        return (
            <div>
                <h1>Comments</h1>
                <p>Author: {author}</p>
                <p>Body: {body}</p>
                <p>Comment ID: {comment_id}</p>
                <p>Time & Date: {created_at}</p>
                <p>Votes: {votes}</p>
                <div>
                    <h1>Add Comment</h1>
                    <input></input>
                    <button>Submit Comment</button>
                </div>
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