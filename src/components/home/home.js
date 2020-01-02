import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import HeaderNavbar from "../common/navbar/headerNavbar";
import Footer from "../common/footer/footer";


export default class Home extends Component {
    render() {

        return (
            <div>
                <HeaderNavbar/>
                <div className="outside">&nbsp;</div>
                <div className="main">
                <Card bg="light" style={{width: '100%'}}>
                    <Card.Header>News</Card.Header>
                    <Card.Body>
                        <Card.Title>Recent News</Card.Title>
                        <Card.Text>
                            The last event was won by Kevin. He's now closing in on Chris who still holds first place.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="light" style={{width: '100%'}}>
                    <Card.Header>Next Event</Card.Header>
                    <Card.Body>
                        <Card.Title>Upcoming Events</Card.Title>
                        <Card.Text>
                            The next event is Pool on 5/7/2020 at 6:00pm at keg stand.
                        </Card.Text>
                        <br/>
                    </Card.Body>
                </Card>
                <br/>
                <br/>
                </div>
                <div className="outside">{" "}</div>
                <Footer />
            </div>
        );
    }
}