import React from 'react'
import { ajax } from 'jQuery';
import Price from './Price.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pricePerNight: '',
            cleaningFees: '',
            serviceFees: ''
        }
    }

    componentDidMount() {
        ajax({
            type: "GET",
            url: '/house' ,
            success: (data) => {
                this.setState({pricePerNight: data[0].price_per_night,
                     cleaningFees: data[0].cleaning_fees,
                    serviceFees: data[0].service_fees})
            }, 
        })
    }
    
    render() {
       
        return (
            <div>
               <Price pricePerNight={this.state.pricePerNight}/>
            </div>
        )
    }
}

export default App;