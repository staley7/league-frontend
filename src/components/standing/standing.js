import React, {Component} from "react";
import Table from 'react-bootstrap/Table';
import HeaderNavbar from "../common/navbar/headerNavbar";
import Footer from "../common/footer/footer";


export default class Standing extends Component {
    render() {
        return (
            <div>
                <HeaderNavbar/>
                <div className="small-outside">&nbsp;</div>
                <div className="large-main">
                <h5 style={{color: "#FFFFFF"}}>Standings</h5>
                <Table striped bordered hover response variant="dark">
                    <thead>
                    <tr>
                        <th>Member Name</th>
                        <th>Position</th>
                        <th>Adjusted Points</th>
                        <th>Total Points</th>
                        <th># of Events</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Chris Cooley</td>
                        <td>1st</td>
                        <td>401</td>
                        <td>450</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Zach Brekunitch</td>
                        <td>2nd</td>
                        <td>380</td>
                        <td>360</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Kevin Hafer</td>
                        <td>3rd</td>
                        <td>360</td>
                        <td>340</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Tim MildenBerger</td>
                        <td>3rd</td>
                        <td>450</td>
                        <td>400</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Lance Staley</td>
                        <td>5th</td>
                        <td>401</td>
                        <td>380</td>
                        <td>20</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
                <div className="small-outside" />
                <Footer />
            </div>
        );
    }
}