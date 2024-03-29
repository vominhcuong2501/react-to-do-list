import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          CYBERLEARN
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                // activeClassname="activeNavItem display-4"
                // activeStyle = {{fontWeight: 'bold'}}
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeClassname="activeNavItem display-4"
                // activeStyle = {{fontWeight: 'bold'}}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeStyle = {{fontWeight: 'bold'}}
                // activeClassname="activeNavItem display-4"
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeStyle = {{fontWeight: 'bold'}}
                // activeClassname="activeNavItem display-4"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeStyle = {{fontWeight: 'bold'}}
                // activeClassname="activeNavItem display-4"
                className="nav-link"
                to="/demoDragDrop"
              >
                DragDrop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeStyle = {{fontWeight: 'bold'}}
                // activeClassname="activeNavItem display-4"
                className="nav-link"
                to="/DragAndDropDnD"
              >
                DragAndDropDnD
              </NavLink>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bài tập Todolist
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/todolistrfc">
                  TodolistRFC
                </NavLink>
                <NavLink className="dropdown-item" to="/todolistrcc">
                  TodolistRCC
                </NavLink>
                <NavLink className="dropdown-item" to="/todolistredux">
                  TodolistReducer
                </NavLink>
                <NavLink className="dropdown-item" to="/todolistsaga">
                  TodolistSaga
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
