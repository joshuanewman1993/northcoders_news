import React, { Component } from 'react';
import * as api from '../Utils/api';
import up from '../images/thumbsup.png';
import down from '../images/thumbsdown.png';
import Error from './Error'
import '../CSS/thumb.css';

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

                <button className='buttonThumb' onClick={() => this.updateComment(1)} disabled={(commentVote > 0)}> <img
                    src={up}
                    className='thumb'
                    alt="thumb up"
                /></button>
                <button className='buttonThumb' onClick={() => this.updateComment(-1)} disabled={(commentVote < 0)}><img
                    src={down}
                    className='thumb'
                    alt="thumb down"
                /></button>
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
