import React from "react";
import { useSpring, animated } from "react-spring";

export default function DemoUseSpring(props) {
  const propsAnim = useSpring({
    // đến
    color_text: "red",
    // từ
    from: { color_text: "green" },
    // khoảng thời
    config: { duration: 1000 },
  });

  const propsAnimNuber = useSpring({ number: 50, color: 'aqua', from: { number: 0, color: 'black' }, config: {duration: 1000} });

  const propsScroll = useSpring({scroll: 0, from: {scroll: 100}, config: {duration: 5000}})
  
  return (
    <div>
      <h1>Change color text</h1>
      <animated.div style={{ color: propsAnim.color_text }}>
        I will fade in
      </animated.div>
      <hr />

      <h1>Change number</h1>
      <animated.h1>{propsAnimNuber.number}</animated.h1>
      <animated.p style={{fontSize: propsAnimNuber.number, color: propsAnimNuber.color}}>Cường</animated.p>
      <hr />

      <animated.div  scrollLeft={propsScroll.scroll}>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>

      </animated.div>
    </div>
  );
}
