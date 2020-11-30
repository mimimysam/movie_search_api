import React, {useState} from 'react';

const ThumbRating = ( {id, title, image, thumbsUpCount, thumbsDownCount} ) => {

    const [upVotes, setUpVotes] = useState(thumbsUpCount);
    const [downVotes, setDownVotes] = useState(thumbsDownCount);

    const addThumbsUp = () => {
        setUpVotes(upVotes +1)
        const rating = {
            id,
            title,
            thumbsUpCount: upVotes +1,
            thumbsDownCount: downVotes
        }
        const stringified = JSON.stringify(rating);
        localStorage.setItem(id, stringified);
    }

    const addThumbsDown = () => {
        setDownVotes(downVotes +1)
        const rating = {
            id,
            title,
            thumbsUpCount: upVotes,
            thumbsDownCount: downVotes +1
        }
        const stringified = JSON.stringify(rating);
        localStorage.setItem(id, stringified);
    }

    const resetLink = () => {
        localStorage.removeItem(id);
        setUpVotes(0);
        setDownVotes(0);
    }
    

    return (
    <div className="thumb-rating">
        <img src={image} alt='movie poster' />
        <h3>Would you recommend this movie?</h3>
            <table>
            <tbody>
                <tr>
                    <td>
                    <div >
                    <button className="thumbs-up" onClick={() => addThumbsUp()}>
                        <i className="fa fa-thumbs-up fa-4x" />
                    </button>
                    </div>
                    </td>
                    <td>
                    <div >
                    <button className="thumbs-down" onClick={() => addThumbsDown()}>
                        <i className="fa fa-thumbs-down fa-4x" />
                    </button>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Yes: {upVotes} </h3>
                    </td>
                    <td>
                        <h3>No: {downVotes} </h3>
                    </td>
                </tr>
            </tbody>
            </table>
        <h4 className="reset-link" onClick={() => resetLink()}>Reset Votes</h4>
    </div>
    )
}

export default ThumbRating;