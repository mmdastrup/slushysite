import React, { Component } from 'react';
import SlushyItem from './slushy_item';

export default class Browse extends Component {
    render() {

        this.slushies =[
            {_id: 0, name: "Black Cherry Fire", flavor: "Flavor: Black Cherry", picture: "http://www.shutterbean.com/wp-content/uploads/2015/05/boozycherryslushies14.jpg", selected: false},
            {_id: 1, name: "Mountain Blast", flavor: "Flavor: Lime", picture: "http://recipegreat.com/images/lemon-lime-slush-02.jpg", selected: false},
            {_id: 2, name: "Freezer Burn", flavor: "Flavor: Blue Razberry", picture: "http://cdn8.bigcommerce.com/s-kjhi7/images/stencil/500x659/products/6/11/blue-slush-eliquid-600x600_2__84764.1508411805.jpg?c=2&imbypass=on", selected: false},
            {_id: 3, name: "Mango Pineapple", flavor: "Flavor: Mango/Pineapple", picture: "http://www.frugalmomeh.com/wp-content/uploads/2016/05/mango-pineapple-slushie-3.jpg", selected: false},
            {_id: 4, name: "Canada ICE", flavor: "Flavor: Hockey", picture: "https://homemadehooplah.com/wp-content/uploads/2015/07/Red-White-and-Blue-Vodka-Lemonade-Slush-3.jpg", selected: false},
            {_id: 5, name: "Feel the chill", flavor: "Flavor: Cold", picture: "https://i.pinimg.com/originals/ed/d3/b3/edd3b35c895cb79adf4040539b08f5c2.jpg", selected: false}
          ]

        return (
            <div className='slushy_container'>
            {
                this.slushies.map(slushy => {
                    return (
                      <SlushyItem className="slushy_list" key={slushy._id} {...slushy} />
                    )
                })
              }
            </div>
        );
    }
}