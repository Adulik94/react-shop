import React from 'react';
import './Home.css';
import Button from './Button';

const Home = (item) => {
    return(
    <div key={item.id} className='home'>
        <div className='item'>
            <h1 className='title'>{item.title}</h1>
            <p className='info'>{item.body}</p>
            <div className='buttons' >
                <Button value='Save' className='save'/>
                <Button value='Add to cart' className='addToCart'/>
            </div>

        </div>
    </div>
    );
}

export default Home;