import React, {Component} from "react";
import HeaderNavbar from "../common/navbar/headerNavbar";


export default class Admin extends Component {
    render() {
        return (
            <div>
                <HeaderNavbar/>
                <div>This is Admin page</div>
            </div>

        );
    }
}