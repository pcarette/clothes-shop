import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.types";

const addCardItem = (cartItems, productToAdd) => {
    //find if cartItems contains products to add
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    //if found increment quantity
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    //return new array with modified cartitems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    } else {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  };
  
  const removeRowOfItems = (cartItems, cartRowToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartRowToRemove.id);
  };
  

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCardItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
};

export const removeItemToCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
};
export const removeItemRowToCart = (cartItems, productRowToRemove) => {
  const newCartItems = removeRowOfItems(cartItems, productRowToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
};
