import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavbarCustom from '../components/nav';
import TotalDonatePage from '../components/totalDonate';

class DonorTrackingDonation extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display : 'flex'}}>
                <NavbarCustom/>
                <Container fluid style={{paddingTop: '30px', background: '#F5F5F5', height: '100%', marginLeft: '260px', paddingLeft: '80px'}}>
                    <Row>
                        <Col xs={9}>
                            <div className="page-headings">Tracking Donations</div>
                            <div className="page-subheadings">Keep track of all your donations and how many tokens you have raised for each cause.</div>
                        </Col>
                        <Col xs={3}>
                            <div className="donor-name" >
                                Donor Name
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={{scrollBehavior: 'auto', maxHeight: '100%'}}>
                            <TotalDonatePage/>
                            <TotalDonatePage/>
                            <TotalDonatePage/>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export  default DonorTrackingDonation;