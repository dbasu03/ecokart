import React from 'react';
import apparel5 from '../Assets/apparel5';
import Item1 from '../Item/Item';

const Apparel115 = () => {
    return(
        <div className="popular">
            <h1>Bags</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {apparel5.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Apparel115;