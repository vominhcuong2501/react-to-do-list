import React, { useState } from "react";

export default function DemoHookUseState(props) {
  // (1) this.state = {}
  // (2) this.setState(newState)

  // tuple
  let [state, setState] = useState({ like: 0 });
  const handleLike = () => {
    // lấy like tăng lên 1 và setState
    setState({
      like: state.like + 1
    })
  }

  return (
    <div className="container">
      <div className="card w-25">
        <img className="card-img-top" src="https://i.pinimg.com/originals/fc/99/4e/fc994e76624d91c7baa236cec4043755.jpg" height={300} width={200} alt = "123" />
        <div className="card-body">
          <h4 className="card-title">Vân Chi</h4>
          <p className="card-text">{state.like} <i className="fa fa-heart text-danger"></i></p>
          <button className="btn btn-danger" onClick={handleLike}>Like</button>
        </div>
      </div>
    </div>
  );
}
