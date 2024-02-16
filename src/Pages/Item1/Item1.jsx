import React from 'react';
import './Item1.css'; // You can style your Item1 component separately if needed

const Item1 = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
          ₹{props.new_prices}
        </div>
        <div className="item-prices-old">
          ₹{props.old_prices}
        </div>
      </div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">View Details</a>
    </div>
  );
};

export default Item1;
