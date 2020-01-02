import React, {Component} from "react";
import "./footer.scss";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footerComponent" className="custom-footer page-footer font-small fixed-bottom">
                <div>The League, Since 2018</div>
            </footer>
        );
    }
}