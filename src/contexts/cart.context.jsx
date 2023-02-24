import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(({ id }) => id !== existingCartItem.id)
    } else {
        return cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
    }
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(item => item.id !== productToClear.id);
}

export const CartContext = createContext({
    cartItems: [],
    cartTotalCount: 0,
    addItemToCart: () => {},
    isCartOpen: false,
    setIsCartOpen: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCheckoutTotal: 0
});

export const CartProvider = ({ children }) => {
    const [ cartItems, setCartItems ] = useState([]);
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartTotalCount, setCartTotalCount ] = useState(0);
    const [ cartCheckoutTotal, setCartCheckoutTotal ] = useState(0);

    useEffect(() => {
        let cartTotal = cartItems.reduce((total, item) => total += item.quantity, 0);
        setCartTotalCount(cartTotal);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, { price, quantity }) => total += (quantity * price), 0);
        setCartCheckoutTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const value = { cartItems, addItemToCart, isCartOpen, setIsCartOpen, cartTotalCount, removeItemFromCart, clearItemFromCart, cartCheckoutTotal };
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};