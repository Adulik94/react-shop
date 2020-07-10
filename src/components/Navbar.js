import React from 'react';

function Navbar (props) {
  const { cartTotal, onShowCart } = props;
  const {save,onSave}=props;
  return (
  
      <header>
        <div className="navEl">
          <nav>
            <h2>Shop</h2>
            <ul>
              <li>Home</li>
              <a href="#">
              <li className="save" onClick={onSave}>Saved</li>
                 </a> 
                <span>{save || ''}</span>
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