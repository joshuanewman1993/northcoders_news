import React, { Component } from 'react';
import * as api from '../Utils/api'
import Voter from './Voter';

class CommentsByArticleId extends Component {
    state = {
        comments: [],
        username: '',
        body: '',
        inc_votes: 0
    }
    render() {
        const { author, body, comment_id, created_at, votes } = this.state.comments
        const { comments } = this.state
        const { article_id } = this.props

        return (
            < div >
                <ul>
                    {
                        comments.map(comment => <li key={comment.comment_id}>
                            <p>Author: {comment.author}</p>
                            <p>Body: {comment.body}</p>
                            <p>Comment ID: {comment.comment_id}</p>
                            <p>Time & Date: {comment.created_at}</p>

                            <Voter votes={comment.votes} article_id={article_id} />
                            <button onClick={() => this.handleDelete(comment.comment_id)} >Delete Comment</button>

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
        api.handleDelete(article_id, comment_id)
            .then(() => this.setState(prevState => ({
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
        const newComment = { author: this.state.username, body: this.state.body, created_at: Date.now(), votes: 0 }
        const { username, body } = this.state
        api.addComment(article_id.username, body)
            .then(this.setState({ comments: [...this.state.comments, newComment] })
            )
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