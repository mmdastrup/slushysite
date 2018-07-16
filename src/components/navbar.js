import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <body>
    <div class="navbar">
        <a href="#" class="toggle" id="navHamburger">
            <i class="fas fa-bars"></i>
        </a>
        <a href="#" class="brand">slushies</a>
        <div class="left">
            <a href="#" class="link">Home</a>
            <a href="#" class="link">Browse</a>
        </div>
        <div class="right">
            <a href="#" class="link">Order</a>
        </div>
    </div>
</body>
    );
  }
}
