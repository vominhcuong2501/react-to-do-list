import React, { useReducer } from "react";

export const context = React.createContext();

const initialCart = [];

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "addToCart": {
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(
        (itemCart) => itemCart.id === payload.id
      );
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        const itemCart = { ...payload, quantity: 1 };
        cartUpdate.push(itemCart);
      }
      return cartUpdate;
    }

    case "deleteItem": {
        let cartUpdate = [...state];
        cartUpdate = cartUpdate.filter(item => item.id !== payload.id);
        return cartUpdate;
    }
  }
  return [...state];
};

export default function Contextprovider(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  // giống như rootReducer chu
  const store = {
    cartReducer: [cart, dispatch],
  };

  // dùng context bao bọc tất cả component bên trong (cụ thể là app)
  return <context.Provider value={store}>{props.children}</context.Provider>;
}
