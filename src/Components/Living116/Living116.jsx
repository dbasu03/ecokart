import React from 'react';
import living6 from '../Assets/living6';
import Item1 from '../Item/Item';

const Living116 = () => {
    return(
        <div className="popular">
            <h1>Cleaning</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {living6.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Living116;