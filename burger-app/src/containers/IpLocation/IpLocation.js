import React, { Component } from 'react';
import axios from 'axios';

class IpLocation extends Component {

    state = {
        delivery: false,
        deliveryCities: ['Gdańsk', 'Gdynia', 'Sopot', 'Warszawa', 'Kraków'],
        city: null
    }

    componentDidMount () {
        axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=6d475720aa8d410f8b4cbc81911b681f')
            .then(response => {
                const canDelivery = this.state.deliveryCities.includes(response.data.city);
                this.setState({delivery: canDelivery, city: response.data.city});
                console.log(canDelivery);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let deliveryInfo = "Zlokalizowaliśmy Twoje IP - nie dostarczamy burgerów w te miejsce"
        if(this.state.delivery) {
            deliveryInfo = "Twoje IP wskazuje na miasto " + this.state.city + ". Czekamy na zamówienie."
        }
        return (
            <div style={{fontWeight: 700, fontSize: '17px'}}>
                {deliveryInfo}
            </div>
        );
    }
}

export default IpLocation;