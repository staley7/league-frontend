import React, {Component} from "react";
import HeaderNavbar from "../../common/navbar/headerNavbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../common/footer/footer";
import  "./addMember.scss";

export default class AddMember extends Component {
    render() {
        return (<div id="addMember">
            <HeaderNavbar/>
            <div className="outside">&nbsp;</div>
            <div className="main">
                <div className="add-member-form">
                    <h5 style={{color: "#FFFFFF"}}>Add Member</h5>
                    <br/>
                    <Form>
                        <Form.Group controlId="firstNameControl">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name"/>
                        </Form.Group>
                        <Form.Group controlId="lastNameControl">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name"/>
                        </Form.Group>
                        <Form.Group controlId="NickNameControl">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="text" placeholder="NickName"/>
                        </Form.Group>
                        <Form.Group controlId="ActiveControl">
                            <Form.Label>Member Type</Form.Label>
                            <Form.Control as="select">
                                <option>Active</option>
                                <option>Guest</option>
                            </Form.Control>
                        </Form.Group>
                        <div style={{float: "right"}}>
                            <Button variant="dark" type="submit">
                                Add Member
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="outside"/>
            <Footer/>
        </div>);
    }
}