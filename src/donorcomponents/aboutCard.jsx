import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class AboutCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-us-card">
                <img></img>
                <p>Priyanka Prashanth</p>
                <h4>SAGE</h4>
                <p>Lorem ipsum blah blah blah blah</p>
                <p>"The quote for the particular person"</p>
            </div>
         );
    }
}
 
export default AboutCard;