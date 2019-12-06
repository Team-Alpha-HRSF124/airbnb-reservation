import React from 'react'
import { Wrapper, Form, GuestCount, DropDown} from './styles/Guests.js'

class Guests extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            adults: this.props.adults,
            children: this.props.children,
            infants: this.props.infants
        }
    }

    componentDidUpdate() {
        if (this.state.adults !== this.props.adults || this.state.children !== this.props.children || this.state.infants !== this.props.infants) {
            this.setState({adults: this.props.adults, children: this.props.children, infants: this.props.infants})
        } else {

        }
        // if (previousProps.data !== this.props.data) {
        //     this.setState({adults: this.props.adults, children: this.props.children, infants: this.props.infants})
        // }
    }

    render() {
        return(
           <Wrapper>
                Guests:
            <Form onClick={this.props.changeVisibility}>
        <GuestCount> {this.state.adults + this.state.children} {this.state.adults + this.state.children === 1 
        ? "guest" : "guests"}{this.state.infants === 0 ? '' : `, ${this.state.infants} ${this.state.infants === 1 
            ? "infant" : "infants"}`}</GuestCount><DropDown>\/</DropDown>
            </Form>
            </Wrapper>  
        )
    }
} 

export default Guests;