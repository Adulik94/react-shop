import React from 'react';
import './CartPopUp.css';
import Button from './Button';

const CartPopUp = (props) => {
    return(
    <div className='cartPopUp'>
       <Button onClick={props.onClose} value='X'/>
      {props.cart.map(item => {
        return (
          <div className='cartItem'>
            {item.title}
            <Button className='remove' onClick={() => props.removeFromCart(item)} value='Remove'/>
          </div>
        )
      })}        
    </div>
    );
}

export default CartPopUp;