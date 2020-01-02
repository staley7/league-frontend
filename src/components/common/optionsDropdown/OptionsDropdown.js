import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export  default  class OptionsDropdown extends  Component {
    render() {

        return (
            <ButtonToolbar>
                {[DropdownButton].map((DropdownType, idx) => (
                    <DropdownType
                        size="sm"
                        variant="secondary"
                        title="Additional Actions"
                        id={`dropdown-button-drop-${idx}`}
                        key={idx}
                    >
                        <Dropdown.Item eventKey="1">Edit Event</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Delete Event</Dropdown.Item>
                    </DropdownType>
                ))}
            </ButtonToolbar>
        );
    }

}