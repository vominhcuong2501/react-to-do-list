import React, { useState } from "react";

export default function Login(props) {
  const [userLogin, setUserLogin] = useState({ userName: "", passWord: "", status: false });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newUserLogin = {
      ...userLogin,
      [name]: value,
    };

    for(let key in newUserLogin) {
      if(key !== 'status') {
        if(newUserLogin[key].trim()==='') {
          newUserLogin.status = true;
        }
      }
    }

    setUserLogin(newUserLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userLogin.userName === 'cyberlearn' &&
      userLogin.passWord === 'cyberlearn'
    ) {
      // đăng nhập xong thì chuyển về trang trước đó
      window.history.goBack(); 
      // chuyển đến trang chỉ định sau khi xử lý
    //  history.push('/home') // có nghĩa là chuyển sang trang home khi ấn back sẽ quay về trang login
    // history.replace('/home')// có nghĩa là thay đổi nội dung login thành trang home khi ấn back sẽ quay về trang trước khi bạn vào trang login

    } else {
      alert("Login faile");
      return;
    }
  };
  return (
    <form onSubmit={handleLogin} className="container">
      <h3 className="text-center text-info">LOGIN</h3>
      <div className="form-group">
        <p>Username</p>
        <input
          className="form-control"
          name="userName"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          name="PassWord"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
      <prompt when={false} message={(location) => {
        return "Bạn có chắc muốn rời khỏi trang này ?"
      }} />
    </form>
  );
}
