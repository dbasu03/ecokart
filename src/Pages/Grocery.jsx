/*
import React from 'react';

const Grocery = () => {
  return (
    <div>
        
    </div>
  );
};

export default Grocery;
*/

import React from 'react';
import './Grocery.css'; // You can style your Grocery component separately if needed
import data_products1 from '../Assets/data_products1'; // Import the products from data_products1.js
import Item from './Item1/Item1'; // Assuming you have an Item component

const Grocery = () => {
  return (
    <div className="grocery">
      <h1>Grocery Products</h1>
      <hr />
      <div className="grocery-items">
        {data_products1.map((item, i) => (
          <a key={i} href={item.link}>
            <Item id={item.id} name={item.name} image={item.image} new_prices={item.new_prices} old_prices={item.old_prices} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
