import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      shopitem: [],
      initialData: [],
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
        initialData: data,
      })
    })
  // console.log('didmount')
    
 }

  render() {
    return(
      <div className="App">
        <Navbar />
        {
        this.state.shopitem.map((item) => (
          <Home
            key={item.id}
            title={item.title}
            body={item.body}
          />
        ))
      }
      </div>
    )
    
}

} 


export default App