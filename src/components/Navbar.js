import React from 'react';

function Navbar (props) {
  const { cartTotal, onShowCart } = props;
  return (
  
      <header>
        <div className="navEl">
          <nav>
            <h2>Shop</h2>
            <ul>
              <li>Home</li>
              <li>Saved</li>
              <li className="cart" onClick={onShowCart}>
                <a href="#"> 
                <ion-icon name="cart-outline" />
                Cart
                <span> {cartTotal || ''}</span>
               </a>
              </li>
            </ul>
          
          </nav>
        </div>
      </header>
    
  )
}

export default Navbar