import React, {Component, useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import CartPopUp from './components/CartPopUp'

const App = () => {

  const [cart, setCart] = useState([])
  const [shopItem, setShopItem] = useState([])
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false)

  
  const onShowCart = (show = true) => {
    if (cart.length>0) {
      setIsCartPopupVisible(show)
    }
  }

  const removeFromCart = (item) => {
    const cartik = cart.filter(itm => itm.id!==item.id)
    const isPopupVisible = cartik.length>0;
    setCart(cartik);
    setIsCartPopupVisible(isPopupVisible)
  }

  const onAddToCart = (item) => {
    if(!cart.find(itm => item.id===itm.id)){
      const newCart = [item, ...cart];
      setCart(newCart)
    }
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setShopItem(data)
    })
  }, [])

  // useEffect(() => {
  //   alert('the cart has changed')
  // }, [cart, props])

  return(
    <div className="App">
      <Navbar cartTotal={cart.length} onShowCart={onShowCart}/>
      {shopItem.map((item) => (
        <Home
          key={item.id}
          title={item.title}
          body={item.body}
          addToCart={() => onAddToCart(item)}
        />
      ))}
      {isCartPopupVisible && <CartPopUp cart={cart} removeFromCart={removeFromCart} onClose={() => onShowCart(false)}/>}
    </div>
  )

} 


export default App