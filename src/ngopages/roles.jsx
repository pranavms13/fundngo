import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import logolight from '../images/logo_light.png';
import donorimg from '../images/donor.png';
import ngoimg from '../images/ngo.png';

class RolePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{background:'#ffffff' , height: '100%'}}>
                <div className="role-header">
                    <img src={logolight} alt="Logo" className="logo-light"/>
                </div>
                <Container>
                    <Row style={{paddingTop: '75px'}}>
                        <div style={{width: '100%', textAlign: 'center', fontSize: '40px', fontWeight: '500', color: '#2f3e46'}}>Select your Role</div>
                    </Row>
                    <Row className="justify-content-md-center" style={{marginTop: '15px'}}>
                        <Col xs={3} style={{margin:'50px'}}>
                            <div className="donor-card">
                                <img src={donorimg} alt="Donor" style={{ height: '150px'}}/>
                                <div style={{paddingTop: '30px', color: '#7D9257', fontSize: '19px'}}>DONOR</div>
                            </div>
                        </Col>
                        <Col xs={3} style={{margin:'50px'}}>
                            <div className="ngo-card">
                                <img src={ngoimg} alt="NGO" style={{ height: '150px'}}/>
                                <div style={{paddingTop: '30px', color: '#6A6A6A', fontSize: '19px'}}>NGO</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}
 
export default RolePage;