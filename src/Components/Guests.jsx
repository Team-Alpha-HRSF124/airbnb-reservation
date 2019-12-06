import React from 'react'
import './Guests.css'

class Guests extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            adults: 1,
            infants: 0
        }
    }

    render() {
        return(
            <div>
                Guests
        <div className="guests" onClick={this.props.changeVisibility}>
            <div>{this.state.adults} guest</div><div className="dropDown">\/</div>
            </div>
            </div>
        )
    }
} 

export default Guests;