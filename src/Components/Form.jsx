import React from 'react';
import './Form.css';

let Form = props => {
    return(
        <div className="form">
            <span>Dates:</span>
            <div className="checkin">
                <div>Check in</div>
                <div>--></div>
                <div>Check out</div>
            </div>
        </div>
    )
}

export default Form;
