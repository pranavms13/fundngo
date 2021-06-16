import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavbarCustom from '../components/nav';
import TotalDonate from '../components/totalDonate';

class DonorTrackingDonationPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px'}}>
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
                    <Col xs={12}>
                        <div>
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
 
export  default DonorTrackingDonationPage;