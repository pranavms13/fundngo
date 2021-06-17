import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import DashWelcomeCard from '../donorcomponents/dashWelcomeCard';
import DonateScheme from '../donorcomponents/donateScheme';

import usericon from '../images/user.png';

class DonorDashboard extends Component {
    render() { 
        return (
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px'}}>
                <div style={{ marginLeft: '15px' }}>
                    <input type="text" name="search" className="searchbar" placeholder="Search"/>
                    <div className="donor-name" style={{ float:'right' }}>
                        Donor Name
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
                    <Col xs={8}>
                        <div style={{ maxHeight: '400px', overflowX: 'auto' }}>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <DonateScheme/>
                                <DonateScheme/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{ textAlign: 'center', alignItems: 'center' }}>
                            <h3>Popular Organisations</h3>
                            <div style={{margin: '25px'}}><Button style={{ width: '300px', height:'45px' }}>COVID RELIEF</Button></div>
                            <div style={{margin: '25px'}}><Button style={{ width: '300px', height:'45px' }}>COVID RELIEF</Button></div>
                            <div style={{margin: '25px'}}><Button style={{ width: '300px', height:'45px' }}>COVID RELIEF</Button></div>
                            <div style={{margin: '25px'}}><Button style={{ width: '300px', height:'45px' }}>COVID RELIEF</Button></div>
                            
                        </div>
                        {/* <DonateScheme/> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default DonorDashboard;