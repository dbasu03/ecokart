import React from 'react';
import './Popular1.css';
import data_products1 from '../Assets/data_products1';
import Item1 from '../Item/Item';

const Popular1 = () => {
    return(
        <div className="popular">
            <h1>TODAYS</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {data_products1.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Popular1;
