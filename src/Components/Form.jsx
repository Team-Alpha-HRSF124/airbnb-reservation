import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkIn: "Check in",
            checkOut: "Check out"
        }
    }

    render() {
        return(
            <div className="form">
                <span>Dates:</span>
                <div className="checkin">
        <div onClick={this.props.changeVisibility}>{this.state.checkIn}</div>
                    <div>--></div>
        <div onClick={this.props.changeVisibility}>{this.state.checkOut}</div>
                </div>
            </div>
        )
    }
} 

export default Form;
