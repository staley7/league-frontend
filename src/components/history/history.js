import React, {Component} from "react";
import HeaderNavbar from "../common/navbar/headerNavbar";
import {Table} from "react-bootstrap";
import Footer from "../common/footer/footer";

export default class History extends Component {
    render() {
        return (
            <div>
                <HeaderNavbar/>
                <div className="small-outside">&nbsp;</div>
                <div className="large-main">
                    <h5 style={{color: "white", marginLeft: "20px"}}> Previous Seasons Results</h5>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <td>Season #</td>
                            <td>Season Winner</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td># of Events</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Chris Cooley</td>
                            <td>8-2-2019</td>
                            <td>11-10-2019</td>
                            <td>20</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="small-outside"/>
                <Footer/>
            </div>
        );
    }
}