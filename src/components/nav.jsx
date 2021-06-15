import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logolight from '../images/logo_light.png';

class NavbarCustom extends Component {
    state = {  }
    render() { 
        return ( <Nav defaultActiveKey="/home" className="flex-column my-nav">
                    <Navbar.Brand href="#home" style={{marginBottom: '55px'}}>
                    <img
                        src={logolight}
                        width="190"
                        height="42"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                    <Nav.Link eventKey="link-3" className= "logout">Logout</Nav.Link>
                </Nav> 
                );
    }
}
 
export default NavbarCustom;