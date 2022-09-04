import React from "react";
import { useSprings, animated } from "react-spring";
// thực hiện đồng loạt các animation cho các object mà mỗi object có các giá trị animation khác nhau

export default function Ex3UseSpring() {
  let arrOpacity = [
    { color: "red", num: 100, content: "FullStack", opacity: 0.1 },
    { color: "green", num: 200, content: "BackEnd", opacity: 0.3 },
    { color: "blue", num: 300, content: "FrontEnd", opacity: 0.5 },
    { color: "pink", num: 400, content: "Cyberlearn", opacity: 0.7 },
    { color: "orange", num: 500, content: "Cybersoft", opacity: 1 },
  ];

  let propsAnimationUseSpring = useSprings(
    // ý nghĩa tham số của useSprings
    // tham số 1: số lần lặp
    // tham số 2:
    arrOpacity.length,
    arrOpacity.map((item) => ({
      opacity: item.opacity,
      color: item.color,
      content: item.content,
      num: item.num,
      from: { opacity: 0, color: "black", content: item.content, num: 0 },
      config: { duration: 3000 },
    }))
  );

  const renderContent = (propsAnim) => {
    let resultAnimComponent = [];
    for (let key in propsAnim) {
      if (key === "content" || key === "num") {
        resultAnimComponent.push(
          <animated.h1 style={propsAnim}>{propsAnim[key]}</animated.h1>
        );
      }
    }
    return resultAnimComponent;
  };

  return (
    <div>
      {propsAnimationUseSpring.map((propsAnim, index) => {
        return (
          // khi render mỗigiá trị thì ứng với mỗi animation
          <div key={index}>
            {/* <animated.span key={index} style={propsAnim}>
              {propsAnim.num}
            </animated.span>
            <animated.span key={index} style={propsAnim}>
              {propsAnim.content}
            </animated.span> */}
            {renderContent(propsAnim)}
          </div>
        );
      })}
    </div>
  );
}
