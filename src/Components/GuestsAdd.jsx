import React from 'react';

class GuestsAdd extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            adultsCount: 1,
            childrenCount: 0,
            infantsCount: 0
        }
        this.adultsCountUp = this.adultsCountUp.bind(this);
        this.childrenCountUp = this.childrenCountUp.bind(this);
        this.infantsCountUp = this.infantsCountUp.bind(this);
        this.adultsCountDown = this.adultsCountDown.bind(this);
        this.childrenCountDown = this.childrenCountDown.bind(this);
        this.infantsCountDown = this.infantsCountDown.bind(this);
    }

    adultsCountUp() {
        let adultsCount = this.state.adultsCount + 1;
        this.setState({adultsCount: adultsCount})
    }

    childrenCountUp() {
        let childrenCount = this.state.childrenCount + 1;
        this.setState({childrenCount: childrenCount})
    }

    infantsCountUp() {
        let infantsCount = this.state.infantsCount + 1;
        this.setState({infantsCount: infantsCount})
    }

    adultsCountDown() {
        let adultsCount = this.state.adultsCount - 1;
        this.setState({adultsCount: adultsCount})
    }

    childrenCountDown() {
        let childrenCount = this.state.childrenCount - 1;
        this.setState({childrenCount: childrenCount})
    }

    infantsCountDown() {
        let infantsCount = this.state.infantsCount - 1;
        this.setState({infantsCount: infantsCount})
    }

    render(){
        return(
            <div className="guests-add">
                <div className="adults">
        <div>Adults</div><div><button onClick={this.adultsCountDown} disabled={this.state.adultsCount === 1}>-</button>{this.state.adultsCount}<button onClick={this.adultsCountUp} disabled={this.state.adultsCount + this.state.childrenCount === 4}>+</button></div>
        <div>Children</div><div><button onClick={this.childrenCountDown} disabled={this.state.childrenCount === 0}>-</button>{this.state.childrenCount}<button onClick={this.childrenCountUp} disabled={this.state.adultsCount + this.state.childrenCount === 4}>+</button></div>
        <div>Infants</div><div><button onClick={this.infantsCountDown} disabled={this.state.infantsCount === 0}>-</button>{this.state.infantsCount}<button onClick={this.infantsCountUp} disabled={this.state.infantsCount === 5}>+</button></div>
                </div>
            </div>
        )
    }
}

export default GuestsAdd;