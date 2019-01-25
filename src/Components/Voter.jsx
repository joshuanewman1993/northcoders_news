import React, { Component } from 'react';
import * as api from '../Utils/api';
import up from '../images/thumbsup.png';
import down from '../images/thumbsdown.jpg';
import Error from './Error'

class Voter extends Component {
    state = {
        voteChange: 0,
        hasError: false

    }
    render() {
        const { voteChange, hasError } = this.state
        const { votes } = this.props
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div>
                <img src={up} onClick={() => this.updateVote(1)} disabled={(voteChange > 0)} width='30px' alt='voteup'></img>
                <img src={down} onClick={() => this.updateVote(-1)} disabled={(voteChange < 0)} width='30px' alt='votedown'></img>
                <p>{votes + voteChange}</p>
            </div >
        );
    }

    updateVote = direction => {
        const { article_id } = this.props
        api.patchArticleVote(article_id, direction)
            .then(() => this.setState(({ voteChange }) => ({
                voteChange: voteChange + direction
            })))
            .catch(err => this.setState({
                hasError: err
            }))
    };
}


export default Voter;
