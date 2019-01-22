import React, { Component } from 'react';
import * as api from '../Utils/api'

class CommentsByArticleId extends Component {
    state = {
        comments: [],
        username: '',
        body: ''
    }
    render() {
        const { author, body, comment_id, created_at, votes } = this.state.comments
        const { comments } = this.state
        return (
            < div >
                <ul>
                    {
                        comments.map(comment => <li key={comment.comment_id}>
                            <p>Author: {comment.author}</p>
                            <p>Body: {comment.body}</p>
                            <p>Comment ID: {comment.comment_id}</p>
                            <p>Time & Date: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                            <button onClick={() => this.handleDelete(comment.comment_id)} >Delete Comment</button>
                            <button>Vote Up</button>
                            <button>Vote Down</button>

                        </li>)
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add Comment Below</h1>
                    <input id='username' type='text' value={this.state.username} onChange={this.handleChange}></input>
                    <input id='body' type='text' value={this.state.body} onChange={this.handleChange}></input>

                    <button type='submit'>Add Comment</button>
                </form>
            </div >
        );
    }

    handleDelete(comment_id) {
        const { article_id } = this.props
        const BASE_URL = `https://north-coders-knews.herokuapp.com/api`
        fetch(`${BASE_URL}/articles/${article_id}/comments/${comment_id}`, {
            method: 'DELETE'
        }).then(res => {
            return res.data
        }).then(() => this.setState(prevState => ({
            comments: prevState.comments.filter(comment => comment.comment_id !== comment_id)
        })))
            .catch((err) => {
                console.log(err);
            })
    }

    handleChange = (event) => {
        const { id } = event.target
        this.setState({
            [id]: event.target.value,
        })
    }


    handleSubmit = (event) => {
        const { article_id } = this.props
        event.preventDefault();
        this.addComment(article_id);
        this.setState({
            username: '',
            body: ''
        })
    };

    addComment = async (article_id) => {
        const BASE_URL = `https://north-coders-knews.herokuapp.com/api`
        fetch(`${BASE_URL}/articles/${article_id}/comments`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                body: this.state.body
            })
        })

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