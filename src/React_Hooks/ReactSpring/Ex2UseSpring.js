import React from "react";
import { useSpring, animated } from "react-spring";

export default function Ex2UseSpring(props) {
  // thay dổi màu
  let { color, ...propsUseSpring } = useSpring({
    color: [151, 255, 255], // màu sắc sau animation
    from: {
      color: [238, 99, 99], // màu sắc bắt đầu
    },
    config: {
      duration: 2000,
      delay: 0,
    },
  });

  // tăng độ dài tăng font chữ
  let propAnimation = useSpring({
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
      color: 'black'
    },
    to: async (next, cancel) => {
      await next({ width: "100%", color: 'red', fontSize: "50px", height: "100%" });
      await next({ width: "50%", color: 'blue', fontSize: "10px", height: "50%" })
      // return muốn dừng chỗ nào thì đặt chỗ đó
      await next({ width: "100%", color: 'pink', fontSize: "50px", height: "100%" });
    },
    // thực thi cho từng thằng
    config: { duration: 1000 },
  });
  return (
    <div>
      <animated.div
        style={{
          fontSize: propsUseSpring.fontSize,
          color: color.interpolate((r, g, b) => {
            return `rgb(${r}, ${g}, ${b})`;
          }),
        }}
      >
        Hello Cybersooft
      </animated.div>

      <hr />

      <animated.h1 style={propAnimation}>
        <span>Hi Cybersoft</span>
      </animated.h1>
    </div>
  );
}
