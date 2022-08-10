import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} productos`);
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>cc:</li>
          <li>{item.cc}</li>
          <li>personalizado:</li>
          <li>{item.personalizado}</li>
          <li>Type:</li>
          <li>{item.type}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;