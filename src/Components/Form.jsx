import React from 'react';
import { Wrapper, Dates, CheckIn, Checks } from './styles/Form.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkIn: "Check in" ,
            checkOut: "Check out",
            dayStart: 0,
            dayEnd: 0  
        }
    }

    componentDidUpdate() {
        if ((this.props.checkIn !== this.state.dayStart && this.props.checkIn[1] !=='/') && 
        (this.props.checkOut !== this.state.dayEnd && this.props.checkOut[1] !== '/')) {
            this.setState({checkIn: this.props.checkIn,
                 checkOut: this.props.checkOut,
                  dayStart: this.props.checkIn,
                dayEnd: this.props.checkOut})
        } else {

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
