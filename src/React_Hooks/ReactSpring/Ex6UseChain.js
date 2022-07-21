import React, { useEffect, useRef, useState } from "react";
import { useChain, useSpring, useTransition, animated } from "react-spring";

export default function Ex6UseChain() {

  let [arrContent, setArrContent] = useState([
    { id: 1, title: "FontEnd", content: "Cybersoft" },
    { id: 2, title: "BackEnd", content: "Cybersoft" },
    { id: 3, title: "FullStack", content: "Cybersoft" },
  ]);

  // tạo 1 useSpring animation
  let springRef = useRef();
  const propsAnim = useSpring({
    opacity: 1,
    width: "100%",
    height: "100%",
    from: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    config: {
      duration: 500,
    },
    ref: springRef,
  });

  // tạo 1 useTransition
  let transitionRef = useRef();
  const transitions = useTransition(arrContent, (item) => item.id, {
    from: { transform: "translate3d(0, -40px, 0)" },
    enter: {
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
      width: "100%",
      height: "100%",
    },
    leave: {
      transform: "translate3d(0, -40px, 0)",
      opacity: 0,
      width: "100%",
      height: "0",
    },
    config: { duration: 500 },
    ref: transitionRef,
  });

  // Kết hợp 2 useSpring
  useChain([springRef, transitionRef]);

  // sử dụng lồng 2 hook cùng lúc
  return (
    <div className="container">
      <animated.div style={propsAnim}>
        {transitions.map(({ item, key, props }) => {
          return (
            <animated.div
              key={key}
              style={props}
              className="mt-2 mb-2 bg-dark text-white p-3 text-center"
            >
              <div className="text-right">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setArrContent([
                      ...arrContent.filter((article) => article.id !== item.id),
                    ]);
                  }}
                >
                  X
                </button>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </animated.div>
          );
        })}
      </animated.div>
    </div>
  );
}
