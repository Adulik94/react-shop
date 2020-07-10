import React, {Component, useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import CartPopUp from './components/CartPopUp'
import SaveItemId from './components/SaveItemId'

const App = () => {

  const [cart, setCart] = useState([])
  const [shopItem, setShopItem] = useState([])
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false)
  const [isSaveVisible,setIsSaveVisible]=useState(false)
  
  //--------Card item--------//
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
//---------------end card-----------//

//--------Saved item--------//

  const onSave =(show = true)=> {
    if(cart.length>0){
      setIsSaveVisible(show)
    }
  }

  const onSaveItem =(item)=>{
    if(!cart.find(itm=> item.id===itm.id)){
      const saved =[item,...cart];
      setCart(saved)
      setIsSaveVisible(isSaveVisible)

    }
  }
  const removeFromSave =(item)=>{
    const savik = cart.filter(itm=>itm.id!==itm.id);
    const isSaveVisible = savik.length>0;
    setCart(savik);
    setIsSaveVisible(isSaveVisible)
  }

//---------------end save-----------//

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setShopItem(data)
    })
  }, [])

  return(
    <div className="App">
      <Navbar cartTotal={cart.length} onShowCart={onShowCart} onSave={onSave}/>
      {shopItem.map((item) => (
        <Home
          key={item.id}
          title={item.title}
          body={item.body}
          addToCart={() => onAddToCart(item)}
          addToSave={()=>onSaveItem(item)}
        />
      ))}
      {isCartPopupVisible && <CartPopUp cart={cart} removeFromCart={removeFromCart} onClose={() => onShowCart(false)} />}
      {isSaveVisible && <SaveItemId cart={cart} removeFromSave={removeFromSave} onClose ={()=>onSave(false) } />};
    </div>
  )

} 


export default App