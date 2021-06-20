import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import usericon from '../images/user.png';
import DonationCard from '../donorcomponents/donationCard'

class DonateCardPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px', width: '80%'}}>
                <Row>
                    <Col xs={12}>
                        <div style={{ marginLeft: '15px' }}>
                            <div className="donor-name" style={{ float:'right' }}>
                                Donor Name
                                <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                
                
                <Row style={{marginTop:'20px'}}>
                    <Col xs={12}>
                        <DonationCard/>
                    </Col>
                </Row>

            </Container>
        );
    }
}
 
export default DonateCardPage;