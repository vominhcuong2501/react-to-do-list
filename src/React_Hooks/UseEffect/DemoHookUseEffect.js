import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHookUseEffect(props) {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);
  console.log(like);

  // useEffect là hàm chạy sau khi giao diện render, thay cho didmount và didupdate cho mọi trường hợp
  //   useEffect(() => {
  //     console.log("didmount");
  //   })
  //   console.log("render");

  // cách viết thay thế cho componentdidmount chỉ chạy 1 lần sau render
  useEffect(() => {
    console.log("didmount");
  }, []);

  // cách viết thay thế cho componentdidupdate
  useEffect(() => {
    console.log("didupdate khi number thay đổi");
    return () => {
        console.log("willunmount")
      }
  }, [number, like]); // number là gia trị nếu bị thay đổi sau render thì effect này sẽ chạy

  console.log("render");

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <div className="card w-50">
        <img
          className="card-img-top"
          src="https://cdnmedia.thethaovanhoa.vn/Upload/qeXw6Srue12aQG46um9kw/files/2022/07/47/midu-xam-minh-8.jpg"
          height={300}
          width={200}
          alt='hotgirl'
        />
        <div className="card-body">
          <h4 className="card-title">Nguyễn Thị Mỹ Dung</h4>
          <p className="card-text text-danger">
            {number} <i className="fa fa-heart text-danger"></i>
          </p>
          <button className="btn btn-danger" onClick={handleIncrease}>
            +
          </button>
        </div>
      </div>
      {/* {like === 1 ? <ChildUseEffect /> : ''} */}
      
    </div>
  );
}
