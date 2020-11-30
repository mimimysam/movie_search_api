import React from 'react';

const RatingsList = ({title, thumbsup, thumbsdown}) => {

    return (
        <div>
        <h3>{title}: {thumbsup} <i className="fa fa-thumbs-up fa-1x" />
         {thumbsdown} <i className="fa fa-thumbs-down fa-1x" /></h3>
        </div>
    )

}

export default RatingsList;
