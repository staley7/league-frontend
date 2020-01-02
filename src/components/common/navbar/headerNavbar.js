import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

export default class HeaderNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">The League</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/standing">Standing</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/members">Members</Nav.Link>
                        <Nav.Link href="/history">Previous Seasons</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar>
                <br/>
            </div>
        );
    }
}