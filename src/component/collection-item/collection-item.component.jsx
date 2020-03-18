import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;

// <Link to='/'>Home</Link>
// <button onClick={() => props.history.push('/')}>Home</button>
// <Link to={`${props.match.url}/13`}>TO HATS 13</Link>