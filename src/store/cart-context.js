import React from 'react'

// Создаем контекст корзины
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (item) => { }
});

export default CartContext;