import React, { useContext } from "react";

import './product-card.styles.scss';

import Button from '../button/button.component'
import { CartContext } from "../../contexts/cart.context";


const ProductCard = ({product}) => {
  const {addItemToCart, cartItems} = useContext(CartContext)
  const addProductToCart = () => {
    addItemToCart(product)
  }
  const {id, name, imageUrl, price} = product
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
    <div className="footer" key={id}>
      <span className="name">{name}</span>
      <span className="price">{price} $</span>
    </div>
    <Button onClick={addProductToCart} buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
