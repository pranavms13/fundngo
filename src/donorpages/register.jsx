import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logolight from '../images/logo_light.png';

class RegisterPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{background:'#ffffff' , height: '100%'}}>
            <div className="role-header">
                <img src={logolight} alt="Logo" className="logo-light"/>
            </div>
            <Container>
                <Row className= "justify-content-center" style={{paddingTop: '20px'}}>
                    <Col xs={6}>
                        <div className= "register-card">
                            <Form>
                            <Form.Label>SELECT YOUR ROLE</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`DONOR`}
                                    checked={true}
                                />

                                <Form.Check
                                    type={type}
                                    label={`NGO`}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>FULL NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter full name" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>EMAIL ADDRESS</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PASSWORD</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONFIRM PASSWORD</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>WALLET ADDRESS</Form.Label>    
                                    <Form.Label style={{color: '#000000'}}>0xAd6f782aBb2130FdfA5019B79025a91eB8330A48</Form.Label>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                SUBMIT
                                </Button>     
                                                        
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
 
export default RegisterPage;