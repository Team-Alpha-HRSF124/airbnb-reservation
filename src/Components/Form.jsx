import React from 'react';
import { Wrapper, Dates, CheckIn, Checks } from './styles/Form.js'

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
           <Wrapper>
                <Dates>Dates:</Dates>
                <CheckIn>
       <Checks onClick={this.props.changeVisibility}>{this.state.checkIn}</Checks>
       <Checks>--></Checks>
        <Checks onClick={this.props.changeVisibility}>{this.state.checkOut}</Checks>
                </CheckIn>
            </Wrapper>
        )
    }
} 

export default Form;
