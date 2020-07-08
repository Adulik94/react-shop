import React from 'react';
import './Home.css';
import Button from './Button';

const Home = (props) => {
    return(
    <div key={props.id} className='home'>
        <div className='item'>
            <h1 className='title'>{props.title}</h1>
            <p className='info'>{props.body}</p>
            <div className='buttons' >
                <Button value='Save' className='save'/>
                <Button value='Add to cart' onClick={props.addToCart} className='addToCart'/>
            </div>

        </div>
    </div>
    );
}

export default Home;