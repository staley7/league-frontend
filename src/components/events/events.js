import React, {Component} from "react";
import HeaderNavbar from "../common/navbar/headerNavbar";
import {Table} from "react-bootstrap";
import "./events.scss";
import Footer from "../common/footer/footer";
import Button from "react-bootstrap/Button";
import OptionsDropdown from "../common/optionsDropdown/OptionsDropdown";

export default class Events extends Component {
    render() {

        return (
            <div>
                <HeaderNavbar/>
                <div>
                    <div className="small-outside">&nbsp;</div>
                    <div className="large-main">
                        <div>
                        <h5 style={{color: "#FFFFFF", float: "left"}}>Events</h5>
                        <div style={{float: "right", marginRight: "20px"}}><a className="add-link"
                                                                              href="/events/addEvent">Add
                            Event</a></div>
                        </div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <td>Event Name</td>
                                <td>Event Date</td>
                                <td>Event Results</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Darts</td>
                                <td>12/3/2019</td>
                                <td>1st Chris, 2nd Tim, 3rd Kevin, 4th Tim, 5th Lance</td>
                                <td><OptionsDropdown/></td>
                            </tr>
                            <tr>
                                <td>Pickle Ball</td>
                                <td>11/3/2019</td>
                                <td>1st Lance, 2nd Tim, 3rd Kevin, 4th Tim, 5th Chris</td>
                                <td>
                                    <OptionsDropdown/>
                                </td>
                            </tr>
                            <tr>
                                <td>Poker</td>
                                <td>TBD</td>
                                <td>TBD</td>
                                <td>
                                    <OptionsDropdown/>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div style={{float: "right", marginRight: "20px"}}><Button variant="light">Complete
                            Season</Button>
                        </div>
                    </div>
                    <div className="small-outside"/>
                </div>
                <Footer/>
            </div>
        );
    }
}