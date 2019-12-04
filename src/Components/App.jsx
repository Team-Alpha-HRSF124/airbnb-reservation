import React from 'react'
import { ajax } from 'jQuery';
import Price from './Price.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pricePerNight: '',
            cleaningFees: '',
            serviceFees: '',
            average_rating: 0,
            number_of_reviews: 0
        }
    }

    componentDidMount() {
        this.getListing();
    }

    getListing() {
        const endpoint = window.location.pathname;
        let url = '';
        if (endpoint.length === 1) {
          url = '/houses/1';
        } else {
          const arr = endpoint.split('/');
          const id = arr[arr.length - 2];
          debugger
          url = `/houses/${id}`;
        }
        ajax({
            type: "GET",
            url: url ,
            success: (data) => {
                this.setState({pricePerNight: data[0].price_per_night,
                     cleaningFees: data[0].cleaning_fees,
                    serviceFees: data[0].service_fees,
                    average_rating: data[0].average_rating,
                    number_of_reviews: data[0].number_of_reviews})
            }, 
            error: (message) => {
                console.log(message);
            }
        })
      }
    
    render() {
       
        return (
            <div>
               <Price pricePerNight={this.state.pricePerNight} 
               averageRating={this.state.average_rating}
               numberOfReviews={this.state.number_of_reviews}/>

            </div>
        )
    }
}

export default App;