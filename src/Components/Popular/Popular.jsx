import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
    return(
        <div className="popular">
            <h1>OUR FAVOURITES</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {data_product.map((item, i) => (
    <a key={i} href={item.link}>
      <Item id={item.id} name={item.name} image={item.image} new_prices={item.new_prices} old_prices={item.old_prices} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Popular;
