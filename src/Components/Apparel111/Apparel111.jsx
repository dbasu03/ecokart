import React from 'react';
import apparel1 from '../Assets/apparel1';
import Item1 from '../Item/Item';

const Apparel111 = () => {
    return(
        <div className="popular">
            <h1>Men's clothing</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {apparel1.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Apparel111;