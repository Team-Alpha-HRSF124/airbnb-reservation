import React from 'react';

let Price = props => {
    return(
        <div>
<span><h1>${props.pricePerNight}</h1></span><span>per night</span> 
        ⭐️{props.averageRating}({props.numberOfReviews} reviews)
        </div>
    )
}

export default Price;
