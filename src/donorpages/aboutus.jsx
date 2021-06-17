import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AboutCard from '../donorcomponents/aboutCard';

class AboutUsPage extends Component {
    state = {  }
    render() { 
        return (
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '40px'}}>
                <Row>
                    <Col xs={9}>
                        <div className="page-headings"><h2><b>BYTE ME</b></h2></div>
                        <div className="page-subheadings">If we were in the Valorant Protocol.</div>
                    </Col>
                </Row>
                <Row style={{paddingTop:'15px'}} className="justify-content-center">
                    <Col xs={5}>
                        <AboutCard/>    
                    </Col>
                    <Col xs={5}>
                        <AboutCard/>
                    </Col>
                </Row>
                <Row style={{paddingTop:'35px'}} className="justify-content-center">
                    <Col xs={5}>
                        <AboutCard/>    
                    </Col>
                    <Col xs={5}>
                        <AboutCard/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default AboutUsPage;