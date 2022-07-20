import React, { memo } from "react";

function ChildUseCallback(props) {
  let title = "cycberlearn";
  let object = { id: 1, name: "Khải" };
  console.log("title", title);
  console.log("object", object);
  console.log("re-render");
  return (
    <div>
      <small>{props.renderNotify()}</small>
      <br />
      <textarea></textarea>
      <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}
export default memo(ChildUseCallback);
