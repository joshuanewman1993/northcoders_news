import React, { Component } from 'react';
import * as api from '../Utils/api'

class Voter extends Component {
    state = {
        voteChange: 0
    }
    render() {
        const { voteChange } = this.state
        const { votes } = this.props
        return (
            <div>
                <button onClick={() => this.updateVote(1)} disbaled={(voteChange > 0)}>Vote Up</button>
                <p>{votes + voteChange}</p>
                <button onClick={() => this.updateVote(-1)} disbaled={(voteChange < 0)}>Vote Down</button>
            </div>
        );
    }

    updateVote = direction => {
        const { article_id } = this.props
        api.patchArticleVote(article_id, direction)
        this.setState(({ voteChange }) => ({
            voteChange: voteChange + direction
        }))
    };
}


export default Voter;
