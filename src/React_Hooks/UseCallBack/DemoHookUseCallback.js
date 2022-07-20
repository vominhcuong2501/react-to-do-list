import React, { useCallback, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

export default function DemoHookUseCallback(props) {
  let [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} like !!!`;
  };

  // khi giá trị nằm trong HÀM FUNCTION bị thay đổi thì mới render HÀM FUNCTION
  // giá trị đầu là tên hàm
  // giá trị sau nếu là [] thì chỉ render 1 lần duy nhất, [tham số] mỗi lần tham số thay đổi đều render lại
  let callBackRenderNotify = useCallback(renderNotify,[like])

  return (
    <div className="m-5">
      Like: {like} <i className="fa fa-heart text-danger"></i>
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: "35px" }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <i className="fa fa-heart text-danger"></i>
      </span>
      <br />
      <br />
      <ChildUseCallback renderNotify={callBackRenderNotify}/>
    </div>
  );
}
