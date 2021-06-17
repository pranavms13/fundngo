import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import donors from '../images/FundNGO_home.png';
import logodark from '../images/logo_dark.png';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount(){
        let bgwin = document.getElementsByClassName('App');
        bgwin[0].style.background = "#e5e5e5"
    }

    render() { 
        return (
            <Container style={{ paddingTop: '40px' }}>
                <Row className="justify-content-end">
                    <Col xs={6}>
                        <img src={logodark} alt="Logo" className="logo-dark"/>
                    </Col>
                </Row>
                <Row style={{paddingTop: '30px'}}>
                    <Col xs={5}>
                        <img className="donors" src={donors} alt="Donor"  />
                    </Col>
                    <Col xs={4} style={{marginLeft: '10%'}}>
                        <div className="login-card">
                        <Form>
                            <Form.Group className="mb-3" controlId="formemail">
                                <Form.Label style={{color: '#84A98C'}}>EMAIL</Form.Label>
                                <Form.Control type="email"/>
                                <Form.Text className="text-muted" style={{marginBottom: '50px'}}>
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{color: '#84A98C'}} >PASSWORD</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Button type="nutton" className="login-btn">
                                LOG IN
                            </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-end" style={{marginTop: '20px', paddingRight: '30px'}}>
                    <Col xs={4} style={{alignContent: 'end'}}>
                        <div style={{color: '#354F52', fontWeight: '500', textAlign: 'end', fontSize: '17px'}}>Don't have and account? <u><a href="#">SIGN UP</a></u></div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default LoginPage;