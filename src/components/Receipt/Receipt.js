import React from 'react';
import Item from '../Item/Item';
import './receipt.css'

const Receipt = ({items}) => {
  return (
    <div className='receipt'>
        <div className='receipt-header'>
            <h4>Receipt</h4>
            <h4>Split</h4>
        </div>
        <div className='items'>
            { items.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
        <div className='totals'>
            
        </div>
    </div>
  )
}

export default Receipt