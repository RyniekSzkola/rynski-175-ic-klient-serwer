import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {
        axios.get('/orders')
            .then(res => {
                console.log(res.data);
                const fetchedOrders = [];
                for(let key in res.data) {
                    fetchedOrders.push(res.data[key]);
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients}
                        totalPrice={order.price}
                        customer={order.customer}
                        orderDate={order.orderDate}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);