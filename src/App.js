import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import CartPopUp from './components/CartPopUp'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      shopitem: [],
    }
  }

  onShowCart = () => {
    this.setState({ isCartPopupVisible: true })
  }

  removeFromCart = (item) => {
    const cart = this.state.cart.filter(itm => itm.id!==item.id)
    const isCartPopupVisible = cart.length>0;
    this.setState({cart, isCartPopupVisible})
  }

  onAddToCart = (item) => {
    if(!this.state.cart.find(itm => item.id===itm.id)){
      const cart = [item, ...this.state.cart];
      this.setState({cart})
      console.log(cart)
    }
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      this.setState({
         shopitem: data,
      })
    })
  // console.log('didmount')
    
 }

  render() {
    const { isCartPopupVisible, cart } = this.state;
    return(
      <div className="App">
        <Navbar cartTotal={this.state.cart.length} onShowCart={this.onShowCart}/>
        {this.state.shopitem.map((item) => (
          <Home
            key={item.id}
            title={item.title}
            body={item.body}
            addToCart={() => this.onAddToCart(item)}
          />
        ))}
        {isCartPopupVisible && <CartPopUp cart={cart} removeFromCart={this.removeFromCart}/>}
      </div>
    )
    
}

} 


export default App