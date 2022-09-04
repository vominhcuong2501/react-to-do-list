import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

// thực hiện tuần tự mỗi object chạy xong animation thì mới tới object kế tiếp => animation dều giống nhau
let items = [
  { title: "Cường", content: "Vân Chi" },
  { title: "Tùng", content: "Mỹ Đỗ Toa" },
  { title: "Minh", content: "Thanh Lân" },
];

export default function Ex4UseTrail() {
    // khi mà setState thì function sẽ chạy lại, còn set của UseTrail thì chỉ chạy lại animation
  let [status, setStatus] = useState(true);
  const [propsUseTrail, set, stop] = useTrail(items.length, () => {
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 80 : 0,
      color: "red",
      from: {
        opacity: 0,
        x: 20,
        height: 0,
        color: "green",
      },
      config: { duration: 500 },
    };
  });

  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 80 : 0,
    color: "pink",
    from: {
      opacity: 0,
      x: 20,
      height: 0,
      color: "green",
    },
    config: {duration: 500}
});

  return (
    <div className="container">
      
        {propsUseTrail.map((propsUseSpring, index) => {
          return (
            <animated.h1 key={index} style={propsUseSpring}>
              {items[index].content}
            </animated.h1>
          );
        })}
     
      <button
        className="btn btn-danger mt-5"
        onClick={() => {
          setStatus(!status);
        }}
      >
        Set status
      </button>
      <button
        className="btn btn-success mt-5"
        onClick={() => {
          set({ color: "orange" });
        }}
      >
        Set color
      </button>
    </div>
  );


}
