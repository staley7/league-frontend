import React from "react";
import axios from "axios";

const url = "http://localhost:8080/";

export function getLeagues(){
    return axios.get(url+"leagues");
}

export function  getLeague(leagueId) {
    return axios.get(`url/league/${leagueId}`);
}

export function  updateLeague(league) {
    return axios.put(url+"league", league);
}

export function  createLeague(league) {
    return axios.post(url+"league", league);
}

export function deleteLeague(leagueId){
    return axios.delete(url+'league+${leagueId)');
}

