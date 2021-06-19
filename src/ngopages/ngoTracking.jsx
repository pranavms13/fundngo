import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavbarCustom from '../donorcomponents/nav';
import TotalDonate from '../ngocomponents/ngoTrackDonate';

import usericon from '../images/user.png';

class NgoTrackingDonationPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px', width: '80%'}}>
                <div>
                    <div style={{ clear: 'both', display: 'flex' }}>
                        <div style={{ width: '80%' }}>
                            <div className="page-headings"><b>Tracking Donations</b></div>
                            <div className="page-subheadings">Keep track of all your donations and how many tokens you have raised for each cause.</div>
                        </div>
                        <div className="donor-name" style={{ float:'right' }}>
                            NGO Name
                            <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col xs={12}>
                        <div style={{maxHeight:'600px', overflowY:'auto'}}>
                            <TotalDonate/>
                            <TotalDonate/>
                            <TotalDonate/>
                            <TotalDonate/>
                            <TotalDonate/>
                            <TotalDonate/>

                        </div>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export  default NgoTrackingDonationPage;