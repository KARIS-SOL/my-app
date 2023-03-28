import React from 'react';
import ItemChild from './ItemChild';


export default function Item() {
  const items = [
    {
      item: "PS5",
      price: "685,000원"
    },
    {
      item: "에어프라이어",
      price: "50,000원"
    },
    {
      item: "사세치킨윙",
      price: "11,500원"
    },

  ]
  return (
    <div>
      {items.map((el, index) => {
        return(
          <div key = {index}>
            <h2>품목명 : {el.item}</h2>
            <p>가격: {el.price}</p>
          </div>
        )
      })}
      {items.map((el, index) => <ItemChild item = {el.item} price = {el.price} key={index} />)}

      
    </div>
  )
}