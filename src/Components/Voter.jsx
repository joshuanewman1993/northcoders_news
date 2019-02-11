import React, { Component } from 'react';
import * as api from '../Utils/api';
import up from '../images/thumbsup.png';
import down from '../images/thumbsdown.png';
import Error from './Error'
import '../CSS/ArticleVoter.css'

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
            <div className='articleVoter'>
                <button className='buttonThumb' onClick={() => this.updateVote(1)} disabled={(voteChange > 0)}><img
                    src={up}
                    className='thumb'
                    alt="thumb down"
                /></button>
                <button className='buttonThumb' onClick={() => this.updateVote(-1)} disabled={(voteChange < 0)}><img
                    src={down}
                    className='thumb'
                    alt="thumb down"
                /></button>
                <p className='votes'>{votes + voteChange}</p>
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
