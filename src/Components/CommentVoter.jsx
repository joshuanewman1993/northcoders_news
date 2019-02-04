import React, { Component } from 'react';
import * as api from '../Utils/api';
import up from '../images/thumbsup.png';
import down from '../images/thumbsdown.jpg';
import Error from './Error'


class CommentVoter extends Component {
    state = {
        commentVote: 0,
        hasError: false

    }

    render() {
        const { commentVote } = this.state
        const { votes } = this.props
        const { hasError } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div className='commentsVoter'>

                <button onClick={() => this.updateComment(1)} disabled={(commentVote > 0)}>Vote up</button>
                <button onClick={() => this.updateComment(-1)} disabled={(commentVote < 0)}>Vote Down</button>
                <p className='votes'>{votes + commentVote}</p>
            </div>
        );
    }

    updateComment = direction => {
        const { article_id, comment_id } = this.props
        api.patchCommentVote(article_id, comment_id, direction)
            .then(() =>
                this.setState(({ commentVote }) => ({
                    commentVote: commentVote + direction
                })))
            .catch(err => this.setState({
                hasError: err
            }))
    };
}


export default CommentVoter;
