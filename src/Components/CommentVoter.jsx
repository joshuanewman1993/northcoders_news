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
            <div>
                <img src={up} onClick={() => this.updateComment(1)} disabled={(commentVote > 0)} width='30px' alt='voteup'></img>
                <img src={down} onClick={() => this.updateComment(-1)} disabled={(commentVote < 0)} width='30px' alt='votedown'></img>
                <p>{votes + commentVote}</p>
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
