import React from "react";
import axios from "axios";

const url = "http://localhost:8080/";

export  function getMembers(){
    return axios.get(url+"members");
}

export function getMember(memberId){
    return axios.get(url+`member/${memberId}`);
}

export function updateMember(member){
    return axios.put(url+"member", member);
}

export function createMember(member){
    return axios.post(url+"member", member);
}

export function deleteMember(memberId) {
    return axios.delete(url+`member/${memberId}`);
}
