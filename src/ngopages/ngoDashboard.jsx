import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import DashWelcomeCard from '../ngocomponents/dashWelcomeCard';
import DonateScheme from '../ngocomponents/ngoDonateScheme';

import usericon from '../images/user.png';

class NgoDashboard extends Component {
    render() { 
        return (
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px', width: '80%'}}>
                <div style={{ marginLeft: '15px' }}>
                    <input type="text" name="search" className="searchbar" placeholder="Search"/>
                    <div className="donor-name" style={{ float:'right' }}>
                        NGO Name
                        <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                    </div>
                    
                </div>

                <Row>
                    <Col xs={12}>
                        <DashWelcomeCard/>
                    </Col>
                </Row>
                <Row>
                    <div style={{ marginTop: '35px' }}>
                        <div className="page-subheadings" style={{ color: '#354f52', fontWeight: 'bold' }}>Donation Schemes</div>
                    </div>

                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ maxHeight: '400px', overflowX: 'auto' }}>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default NgoDashboard;