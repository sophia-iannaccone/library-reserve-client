import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {Form, FormControl} from "react-bootstrap";
import "./styles/HeaderStyle.css";

class HeaderComponent extends React.Component {
    logout = () => {
    }

    render() {
        return (
            <Navbar className="navbar-dark" expand="lg">
                <Navbar.Brand href="/">
                    <i className="fa fa-home"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.logout()}>Log Out</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Snell's Full Catalog" className="mr-sm-2"/>
                        <Link className="btn search-btn" to={`/search`}>Search</Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HeaderComponent