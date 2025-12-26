import React from 'react'

const Card = (props) => {
    
  return (
    <div className='Card'>
      <div className='imageBox'>
        <img src={props.img} alt={props.country} />
        <div className='top'>
          <h3>Trip to</h3>
          <h1>{props.country}</h1>
        </div>
      
        <div className='centre'>
          <h3>{props.days} days</h3>
          <h2>${props.price}</h2>

        </div>
        </div>
    </div>
  );
};

export default Card;