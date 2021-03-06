import React, { Component } from 'react';
import * as api from '../Utils/api'
import CommentVoter from './CommentVoter';
import '../CSS/Comments.css'
import Error from './Error'
import moment from 'moment';



class CommentsByArticleId extends Component {
    state = {
        comments: [],
        username: this.props.user.username,
        body: '',
        hasError: false
    }
    render() {
        const { comments } = this.state
        const { article_id, user } = this.props
        const { hasError } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            < div >
                <ul>
                    {
                        comments.map(comment => <li className='commentsList' key={comment.comment_id}>
                            <p>{comment.username}</p>
                            <p>{comment.body}</p>
                            <p>{moment().format('LLLL')}</p>
                            <br></br>
                            <CommentVoter votes={comment.votes} article_id={article_id} comment_id={comment.comment_id} />
                            {
                                this.state.username === comment.username && <button onClick={() => this.handleDelete(comment.comment_id)} className='deleteCommentButton' disabled={user.username === comment.author}>Delete Comment</button>
                            }
                        </li>)
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='body' ><h2>Body</h2></label>
                    <textarea id='body' type='text' value={this.state.body} onChange={this.handleChange} required ></textarea>

                    <button type='submit' className='addCommentButton'>Add Comment</button>
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
            .catch(err => this.setState({
                hasError: err
            }))
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
        this.addComment(article_id).then(() =>
            this.setState({
                body: ''
            }))
            .catch(err => this.setState({
                hasError: err
            }))
    };

    addComment = async (article_id) => {
        const { body, username } = this.state
        // const newComment = { author: author, username: username, body: this.state.body, created_at: Date.now(), votes: 0 }
        api.addComment(article_id, username, body)
            .then((comment) => {
                const finalComment = { ...comment, author: comment.username }
                this.setState({ comments: [...this.state.comments, finalComment] })
            })
            .catch(err => this.setState({
                hasError: err
            }))
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
            .catch(err => this.setState({
                hasError: err
            }))
    }

}

export default CommentsByArticleId;