import React, {Component} from 'react';

/*
Hey Saad! I was thinking it would be good to drive home the react stuff, so if you want, building a shopping cart would be a good exercise. Then after you build it, we can add in an api. Heres some requirements to work with:
* add an item
* remove an item
* update quantity
* display subtotal
* display tax
* display total (with tax)

Everything else is up to however you want to implement it
I’d suggest setting up a JSON file with your “inventory”, with just a few items and any other properties those items would need
*/




const Checkout = props => (
  <div>
    <h3>subtotal: <span>{props.sub}</span></h3>
    <h3>tax: <span>{props.t}</span></h3>
    <h3>total: <span>{props.tot}</span></h3>
  </div>
)

export default Checkout;
