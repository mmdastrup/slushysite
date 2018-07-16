import React, { Component } from 'react';

export default class SlushyItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='slushy_item'>
                <img src={this.props.picture} className='image' alt='slushy image'/>
                <div className='title'>{this.props.name}</div>
                <div className='subtitle'>{this.props.flavor}</div>
            </div>
        );
    }
}