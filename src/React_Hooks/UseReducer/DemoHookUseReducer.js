import React, { useReducer } from "react";

const initialCart = [{ id: 1, name: "Iphone", price: 1000, quantity: 1 }];

const cartReducer = (state, {type, payload}) => {
  switch (type) {
    case "addToCart": {
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(itemCart => itemCart.id === payload.id);
      if(index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        const itemCart = {...payload, quantity: 1};
        cartUpdate.push(itemCart);
      }
      return cartUpdate;
    }
  }
  return [...state];
};

let arrProduct = [
  { id: 1, name: "Iphone", price: 1000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKhx0YfB6R8fVxG62TLN1hXIRmqt6-xN2zg&usqp=CAU" },
  { id: 2, name: "Samsung", price: 1100,  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABce6HOSWrRkABUNXRBQWDiN6JhiJTKwL5Q&usqp=CAU" },
  { id: 3, name: "Huawei", price: 900,  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YiGdYOPTQ1L4wYphiL3EJGx_pX4a3TuT_A&usqp=CAU" },
];

export default function DemoHookUseReducer(props) {
  // cart là state lấy về từ useReducer.initialCart
  // dispatch là hàm để quản lý state, nhận vào oject j đó để ta xử lý xog trả về state mới khác với redux là gán lại cho state cũ
  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (itemClick) => {
    // console.log(itemClick)
    const action = {
      type: 'addToCart',
      payload: itemClick
    }
    dispatch(action)
  }

  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={item.img}
                  alt={index}
                  width={150}
                  height={200}
                />
                <div className="card-body p-0 pt-2">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">Price: {item.price}</p>
                  <button onClick={() => {addToCart(item)}} className="btn btn-success">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3 className="text-center mt-5 text-primary">Giỏ hàng</h3>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>$ {(product.price * product.quantity).toLocaleString()}</td>
                <td>
                  <button className="btn btn-danger">X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot style={{fontWeight: 'bold'}}>
          <tr>
            <td colSpan={3}></td>
            <td>Total: </td>
            <td>
              $ {cart.reduce((total, item) => {
                return total += (item.quantity * item.price)
              }, 0).toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
