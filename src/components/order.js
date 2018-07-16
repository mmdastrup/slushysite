import React, { Component } from 'react';

const initial_state = {
    name: '',
    address: '',
    credit_info: '',
    
}

export default class Order extends Component {
    
  
    render() {
    
        return (
            <div className='order_container'>
                <input type="text" className="order_inputs" placeholder="name"/>
                <input type="text" className="order_inputs" placeholder="address"/>
                <input type="text" className="order_inputs" placeholder="credit_info"/>
            </div>
        );
    }
}