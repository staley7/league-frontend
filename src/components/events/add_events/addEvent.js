import React, {Component} from "react";
import HeaderNavbar from "../../common/navbar/headerNavbar";
import Form from "react-bootstrap/Form";
import "./addEvent.scss";
import Footer from "../../common/footer/footer";
import Button from "react-bootstrap/Button";

export default class AddEvent extends Component {

    render() {

        return (
            <div id="addEvent">
                <HeaderNavbar/>
                <div className="outside">&nbsp;</div>
                <div className="main">
                    <div className="add-event-form">
                        <Form>
                            <Form.Group controlId="eventNameControl">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control type="text" placeholder="Event Name"/>
                            </Form.Group>
                            <Form.Group controlId="eventRulesControl">
                                <Form.Label>Rules Description</Form.Label>
                                <Form.Control as="textarea" rows="4"/>
                            </Form.Group>
                            <Form.Group controlId="participantsControl">
                                <Form.Label>Participants</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Chris Cooley</option>
                                    <option>Kevin Hafer</option>
                                    <option>Lance Staley</option>
                                    <option>Tim Mildenberger</option>
                                    <option>Zach Brekunitch</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="resultsControl">
                                <Form.Label>Results</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Chris Cooley</option>
                                    <option>Kevin Hafer</option>
                                    <option>Lance Staley</option>
                                    <option>Tim Mildenberger</option>
                                    <option>Zach Brekunitch</option>
                                </Form.Control>
                            </Form.Group>
                            <div style={{float: "right"}}>
                                <Button variant="dark" type="submit">
                                    Add Event
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="outside">{" "}</div>
                <Footer/>
            </div>
        );
    }

}



