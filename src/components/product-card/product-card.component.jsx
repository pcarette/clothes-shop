import React from "react";

import './product-card.styles.scss';

import Button from '../button/button.component'

const ProductCard = ({id, name, imageUrl, price}) => {
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
    <div className="footer" key={id}>
      <span className="name">{name}</span>
      <span className="price">{price} $</span>
    </div>
    <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
