import React, {useContext} from 'react'
import { context } from '../Context/Contextprovider'

let arrProduct = [
    { id: 1, name: "Iphone", price: 1000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKhx0YfB6R8fVxG62TLN1hXIRmqt6-xN2zg&usqp=CAU" },
    { id: 2, name: "Samsung", price: 1100,  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABce6HOSWrRkABUNXRBQWDiN6JhiJTKwL5Q&usqp=CAU" },
    { id: 3, name: "Huawei", price: 900,  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YiGdYOPTQ1L4wYphiL3EJGx_pX4a3TuT_A&usqp=CAU" },
  ];
  
export default function DemoHookUseContext(props) {

    // let store = useContext(context);
    // let cartReducer = store.cartReducer;
    let {cartReducer} = useContext(context);
    let [cart, dispatch] = cartReducer;

    // giỏ hàng
    const addToCart = (itemClick) => {
        const action = {
          type: 'addToCart',
          payload: itemClick
        }
        dispatch(action)
      }

    const deleteItemCart = (itemClick) => {
        dispatch({
            type: "deleteItem",
            payload: itemClick
        })
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
                      <button onClick={() => {deleteItemCart(product)}} className="btn btn-danger">X</button>
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
