import { createContext, useState, useEffect } from "react";

const addCardItem = (cartItems, productToAdd, isDecrementing = false) => {
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

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
}

const removeRowOfItems = (cartItems, cartRowToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartRowToRemove.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart : () => {},
  removeItemRowToCart : () => {},
  cartCount : 0,
  totalAmmount : 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmmount, setTotalAmmount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const totalAmmount = cartItems.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0)
    setTotalAmmount(totalAmmount)
  }, [cartItems, addCardItem, removeCartItem, removeRowOfItems])

  const addItemToCart = (product) => {
    setCartItems(addCardItem(cartItems, product));
  };

  const removeItemToCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };
  const removeItemRowToCart = (product) => {
    setCartItems(removeRowOfItems(cartItems, product));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, removeItemRowToCart, totalAmmount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
