import React from 'react';
import grocery7 from '../Assets/grocery7';
import Item1 from '../Item/Item';

const Grocery117 = () => {
    return(
        <div className="popular">
            <h1>Snackibles</h1>
            <hr/>
 {/*           <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} />
        
                })}
            </div>  */}

<div className="popular-item">
  {grocery7.map((item, i) => (
    <a key={i} href={item.link}>
      <Item1 id={item.id} name={item.name} image={item.image} />
    </a>
  ))}
</div>

        </div>
    )
};

export default Grocery117;