import React, {Component} from "react";
import HeaderNavbar from "../common/navbar/headerNavbar";
import {Table} from "react-bootstrap";
import Footer from "../common/footer/footer";

export default class Members extends Component {
    render() {
        return (
            <div>
                <HeaderNavbar/>
                <div className="small-outside">&nbsp;</div>
                <div className="large-main">
                    <div>
                        <h5 style={{color: "#FFFFFF", float: "left"}}>Members</h5>
                        <div style={{float: "right", marginRight: "20px"}}><a className="add-link"
                                                                              href="/members/addMembers">Add
                            Members</a></div>
                    </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nickname</th>
                            <th>Active Member</th>
                            <th># of active seasons</th>
                            <th># of guest seasons</th>
                            <th># of events won</th>
                            <th># of seasons won</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Zach Brekunitch</td>
                            <td>Jeans Gray</td>
                            <td>Yes</td>
                            <td>1</td>
                            <td>0</td>
                            <td>5</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Chris Cooley</td>
                            <td>The Champ</td>
                            <td>Yes</td>
                            <td>1</td>
                            <td>0</td>
                            <td>9</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Kevin Hafer</td>
                            <td>Great Shot</td>
                            <td>Yes</td>
                            <td>1</td>
                            <td>0</td>
                            <td>3</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Tim Mildenberger</td>
                            <td>NA</td>
                            <td>Yes</td>
                            <td>1</td>
                            <td>0</td>
                            <td>5</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Lance Staley</td>
                            <td>The Commish</td>
                            <td>Yes</td>
                            <td>1</td>
                            <td>0</td>
                            <td>4</td>
                            <td>0</td>
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