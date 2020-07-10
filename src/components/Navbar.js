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
              <li className="home">
              <a href="#"><ion-icon name="home-outline"></ion-icon>Home
              </a>
              </li>
              
              
              <li className="saved" onClick={onSave}>
               <a href="#">
              <ion-icon name="bookmark-outline"></ion-icon>My Cart
                 </a> 
                <span>{save || ''}</span>
                </li>
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