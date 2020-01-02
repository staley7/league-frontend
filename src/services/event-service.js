import React from "react";
import axios from "axios";

const url = "http://locathost:8080/";

export function getAllEvents() {
    return axios.get(url);
}

export function getEvents(leagueId){
    return axios.get(`url/events/${leagueId}`);
}

export function getEvent(eventId){
    return axios.get(`url+event/${eventId}`)
}

export function updateEvent(event){
    return axios.put(url+"event",event);
}

export function createEvent(event) {
    return axios.post(url+"event", event);
}

export function deleteEvent(eventId){
    return axios.delete(`url+event/${eventId}`)
}


