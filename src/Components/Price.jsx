import React from 'react';
import './Price.css'

let Price = props => {

    return (
        <div className="price_container">
            <span className="price">${props.pricePerNight}</span><span className="per_night">per night</span><br></br>
            ⭐️{props.averageRating}({props.numberOfReviews} reviews)
        </div>
    )
}

export default Price;
