import React, { useState, useRef } from "react";

export default function DemoHookUseRef(props) {
  const inputUserName = useRef(null);
  const inputPassWord = useRef(null);

  // giá trị useRef không khai báo lại sau mỗi lần render
  let userName = useRef("");

  let [userLogin, setUserLogin] = useState({ userName: "" });

  const handleLogin = () => {
    console.log("userName", userName.current);
    console.log("userLogin", userLogin.userName);

    userName.current = "abc";
    setUserLogin({
      userName: userName.current,
    });
  };

  return (
    <div className="container w-50">
      <h1 className="text-center text-warning">Login</h1>
      <div className="form-group">
        <h3>Username</h3>
        <input ref={inputUserName} name="userName" className="form-control" />
      </div>
      <div className="form-group">
        <h3>password</h3>
        <input ref={inputPassWord} name="passWord" className="form-control" />
      </div>
      <div className="form-group">
        <button
          onClick={() => {
            handleLogin();
          }}
          className="btn-btn-info"
        >
          Login
        </button>
      </div>
    </div>
  );
}
