import React, { useState } from "react";
import "./LoginPage.scss";
import logo from "../pingr-logo.png";
import axios from "axios";
import { Link, withRouter, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = function(props) {
  let history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const login = function(user) {
    return axios.post(`http://localhost:8001/api/login`, user);
  };

  function onSave(ev) {
    let user = "";
    ev.preventDefault();
    login(state)
      .then(res => {
        if (res.data.error_message) {
          console.log("invalid credentials");
        } else if (res.data.token) {
          console.log("inside res.token");
          localStorage.setItem("id_token", res.data.token);
          user = jwt_decode(res.data.token);
          props.setUser(user);
        }
      })
      .then(() => history.push("/loading"))
      .then(() => {
        user
          ? setTimeout(() => {
              console.log("=====================", user.business_id);
              user.business_id === 1
                ? history.replace("/homepage")
                : history.replace("/business-request-list");
            }, 1500)
          : history.replace("/login");
      })
      .catch(error => console.log("error"));
  }

  return (
    <div className="layout-padding">
      <i
        className="fas fa-arrow-left back back-login-register"
        onClick={() => history.push("/")}
      />

      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>Email Address</label>
          <input
            type="text"
            className="input-field"
            placeholder="email"
            value={state.email}
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          <label>Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="password"
            value={state.password}
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          <button className="login-register-button login">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
