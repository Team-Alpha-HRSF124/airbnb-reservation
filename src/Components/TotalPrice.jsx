import React from 'react';
import { Wrapper, Container, Informational, Price } from './styles/TotalPrice.js';

class TotalPrice extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pricePerNight: this.props.pricePerNight,
            cleaningFees: this.props.cleaningFees,
            serviceFees: this.props.serviceFees,
            amountOfNights: this.calcTotalNights()
        }
        this.calcTotalNights = this.calcTotalNights.bind(this);
    }

    componentDidUpdate() {
        if (this.state.pricePerNight !== this.props.pricePerNight ||
             this.state.cleaningFees !== this.props.cleaningFees ||
             this.state.serviceFees !== this.props.serviceFees ||
             this.props.end - this.props.start !== this.state.amountOfNights) {
                this.setState({pricePerNight: this.props.pricePerNight,
                cleaningFees: this.props.cleaningFees,
                serviceFees: this.props.serviceFees,
            amountOfNights: this.calcTotalNights()})
             }
    }

    calcTotalNights() {
        return this.props.end - this.props.start;
    }

    render() {
      let total = this.calcTotalNights();
      let totalBillForRooms = total * this.state.pricePerNight;
        return(
            <Wrapper>
        <Container><Informational>{this.state.pricePerNight} x {total}</Informational><Price>{this.state.pricePerNight * total}</Price></Container>
            <Container><Informational>Service fees</Informational><Price>{this.state.serviceFees}</Price></Container>
        <Container><Informational>Occupancy taxes and fees</Informational><Price>{this.state.cleaningFees}</Price></Container>
    <Container><Informational>Total:</Informational><Price>{this.state.cleaningFees + this.state.serviceFees + totalBillForRooms}</Price></Container>
            </Wrapper>
        )
    }
}

export default TotalPrice;