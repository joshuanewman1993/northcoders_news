import React, { Component } from 'react';
import * as api from '../Utils/api';

class CommentVoter extends Component {
    state = {
        commentVote: 0
    }

    render() {
        const { commentVote } = this.state
        const { commentVotes, article_id, comment_id } = this.props
        return (
            <div>
                <button onClick={() => this.updateComment(1)} disabled={(commentVote > 0)}>Vote Up</button>
                <p>{commentVote + commentVote}</p>
                <button onClick={() => this.updateComment(-1)} disabled={(commentVote < 0)}>Vote Down</button>
            </div>
        );
    }

    updateComment = direction => {
        const { article_id, comment_id } = this.props
        api.patchCommentVote(article_id, comment_id, direction)
        this.setState(({ commentVote }) => ({
            commentVote: commentVote + direction
        }))
    };
}


export default CommentVoter;
