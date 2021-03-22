import React from 'react';
import './card.css';


export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-body'>{props.children}</div>
      <div className='card-footer'>
        <a href="#" class="card-button">Go somewhere</a>
      </div>
    </div>
  )
}
