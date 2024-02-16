import React from 'react';
import './Top1.css';
import data_top1 from '../Assets/data_top1';
import Item1 from '../Item/Item';

const Top1 = () => {
    return(
        <div className="popular">
            <h1>Logos</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {data_top1.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Top1;
