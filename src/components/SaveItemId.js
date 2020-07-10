import React from 'react';
import './SaveItemId.css';
import Button from './Button';

const SaveItemId = (props) => {
    return(
    <div className='cartSaveUp'>
       <Button onClick={props.onClose} value='X'/>
      {props.cart.map(item => {
        return (
          <div className='saveItem'>
            {item.title}
            <Button className='save' onClick={() => props.removeFromSave(item)} value='Check Out'/>
          </div>
        )
      })}        
    </div>
    );
}

export default SaveItemId;