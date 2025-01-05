import React from 'react'
import './relatedproducts.css'
import data_product from '../Assets/data'
import Item from '../item/item'

const relatedproducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-items">
        {data_product.map((item,i)=>{
            return(<Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />)
        })}

      </div>
    </div>
  )
}

export default relatedproducts
