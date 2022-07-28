import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { commentAction } from "../../redux/Actions/FacebookAction";

export default function DemoReduxApp(props) {

  // useSelector thay thế cho mapStateToProps
  let comments = useSelector((state) => state.FacebookReducer.comments);

  // lấy hàm dispatch từ useDispatch => để gửi giá trị lên reducer
  // thay thế cho mapDispatchToProps hoặc
  let dispatch = useDispatch();

  // lấy thông tin người dùng nhập vào
    let [userComment, setuserComment] = useState({
        name: '',
        content: '',
        avatar:''
    })

    const handleChange = (e) => {
        let {value, name} = e.target;
        setuserComment({
            ...userComment,
            [name]: value
        })
    }

    //sibmit thông tin người dùng lên reducer
    const handleComment = (e) => {
        e.preventDefault(); // chặn reload lại trang
        let userCommentNew = {...userComment, avatar: `https://i.pravatar.cc?u=${userComment.name}`}
        dispatch(commentAction(userCommentNew))
    }

  return (
    <div className="container">
      <h3>FaKebook App</h3>
      <div className="card p-5">
        <div className="cart-header">
          {comments.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-1">
                  <img src={item.avatar} height={50} width={50} />
                </div>
                <div className="col-10">
                  <h6 className="text-danger p-0">{item.name}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleComment} className="card-body px-0">
          <div className="form-groud w-50">
            <h4 className="card-title">Name</h4>
            <input onChange={handleChange} className="form-control" name="name" />
          </div>
          <div className="form-groud w-50 py-3">
            <h4 className="card-title">Content</h4>
            <input onChange={handleChange} className="form-control" name="content" />
          </div>
          <div className="form-ground">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

