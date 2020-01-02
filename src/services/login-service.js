import React from "react";
import  axios from "axios";

const loginUrl = "http://localhost:8080/logon";
const  logoutUrl = "http://localhost:8080/logout";

export function login(loginInfo) {
    axios.post(loginUrl, loginInfo);
}

export function  logout(loginInfo) {
    axios.post(logoutUrl,loginInfo);
}