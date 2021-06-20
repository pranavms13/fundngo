import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class NgoDonateScheme extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="donate-scheme-card">
                <h4><b>{this.props.name}</b></h4>
                <div className="dsc-date">📅 {this.props.date}</div>
                <div>
                <p>{this.props.desc}</p>
                </div>
            </div>
         );
    }
}
 
export default NgoDonateScheme;