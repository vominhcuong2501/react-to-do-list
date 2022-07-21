import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export default function Ex5UseTransition(props) {
  let [arrItem, setArrayItem] = useState([
    { id: 1, title: "Cường", content: "Vân Chi" },
    { id: 2, title: "Tùng", content: "Mỹ Đỗ Toa" },
    { id: 3, title: "Minh", content: "Thanh Lân" },
  ]);

  const [article, setArticle] = useState({
    id: "",
    title: "",
    content: "",
  });

  const propsUseTransition = useTransition(arrItem, (item) => item.id, {
    from: { transform: "translate3d(0, -40px, 0)" },
    enter: { transform: "translate3d(0, 0px, 0)" },
    leave: { transform: "translate3d(0, -40px, 0)" },
    config: { duration: 1000 },
  });

  let renderItem = () => {
    return propsUseTransition.map(({ props, item, key }, index) => {
      return (
        <animated.div
          style={props}
          className="bg-dark text-white p-5"
          key={index}
        >
          <div className="text-right">
            <button className="btn btn-danger" onClick={() => {deleteItem(item.id)}}>
              X
            </button>
          </div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>
      );
    });
  };

  const deleteItem = (id) => {
    // set lại arrayItem mới bằng cách lấy những phần tử !-- id đó
    setArrayItem([...arrItem.filter((item) => item.id !== id)]);
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let item = { ...article, id: Date.now() };
    setArrayItem([...arrItem, item]);
  };
  return (
    <div className="container">
      {renderItem()}
      <div className="form-group">
        <h3>Title</h3>
        <input onChange={handleChange} className="form-control" name="title" />
      </div>
      <div className="form-group">
        <h3>Content</h3>
        <input
          onChange={handleChange}
          className="form-control"
          name="content"
        />
      </div>
      <div className="form-group">
        <button onClick={handleSubmit} className="btn-btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
