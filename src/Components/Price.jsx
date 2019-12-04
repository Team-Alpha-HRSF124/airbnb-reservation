import React from 'react';
import styled from 'styled-components'

let Price = props => {
    // var divStyle = {
    //     borderBottomColor: 'black',
    //     borderBottomWidth: 1
    //   };
    const Title = styled.div`
    border-bottom-style: solid;
    border-bottom-color: grey;
    border-bottom-width: thin;
`;
    return (
        <Title>
            <span>${props.pricePerNight}per night</span><br></br>
            ⭐️{props.averageRating}({props.numberOfReviews} reviews)
        </Title>
    )
}

export default Price;
