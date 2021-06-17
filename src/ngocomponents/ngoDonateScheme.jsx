import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class NgoDonateScheme extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="donate-scheme-card">
                <h4><b>Food Donation</b></h4>
                <div className="dsc-date">📅 12th May, 2021</div>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend quam leo, eget at. 
                    A consectetur hendrerit est magna non molestie sit condimentum. Quam odio neque.</p>
                </div>
            </div>
         );
    }
}
 
export default NgoDonateScheme;