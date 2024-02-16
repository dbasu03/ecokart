import React from 'react';
import grocery2 from '../Assets/grocery2';
import Item1 from '../Item/Item';

const Grocery112 = () => {
    return(
        <div className="popular">
            <h1>Proteins and Fats</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {grocery2.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Grocery112;
