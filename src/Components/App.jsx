import React from 'react'
import { ajax } from 'jQuery';

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
                this.setState({pricePerNight: data.price_per_night,
                     cleaningFees: data.cleaning_fees,
                    serviceFees: data.service_fees})
            }, 
        })
    }
    
    render() {
       
        return (
            <div>
                Hello  from App
            </div>
        )
    }
}

export default App;