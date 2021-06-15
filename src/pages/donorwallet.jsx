import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import DonorBalanceCard from '../components/donorbalance';
import NavbarCustom from '../components/nav';

import usericon from '../images/user.png';
import exclamation from '../images/exclamation.png';

class DonorWalletPage extends Component {
    state = {  }
    render() { 
        return (
            <div style={{display : 'flex'}}>
                <NavbarCustom/>
                <Container fluid style={{paddingTop: '30px', background: '#F5F5F5', height: '100%', marginLeft: '260px', paddingLeft: '80px'}}>         
                    <Row style={{}}>
                        <Col xs={10}>
                            <div>
                                <div className="page-headings"><b>My Wallet</b></div>
                                <div className="page-subheadings">Fill all the details to donate funds. All fields must be filled compulsarily</div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div style={{paddingTop: '25px', display: 'flex'}}>
                                <div className="donor-name">
                                    Donor Name
                                </div>
                                <img src={usericon} style={{ height: '36px', width: '36px'}} alt="User"/>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: '20px'}}>
                        <Col xs={3}>
                            <div style={{display: 'flex', paddingBottom: '15px'}}>
                                <img src={exclamation} style={{ height: '25px', width: '25px' }} alt="!"/>
                                <div style={{ color: '#AA794F', paddingLeft: '5px', paddingTop: '1px' }}>Tokens cannot be converted back to INR</div>
                            </div>
                            <DonorBalanceCard/>
                        </Col>
                        <Col xs={9} style={{padding: '25px', paddingTop: '50px'}}>
                            <div className="page-subheadings">
                                Wallet Address
                            </div>
                            <div style={{fontSize: '18px', letterSpacing: '1px'}}><b>
                                0x356288e2F1175c6dF7819f6651Ff523C737fD7Cb
                            </b></div>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '25px'}}>
                        <Col xs={12}>
                            <div className="page-subheadings">Transaction History</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default DonorWalletPage;