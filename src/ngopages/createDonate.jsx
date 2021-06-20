import React, { Component } from 'react'
import { Button, InputGroup, FormControl, Card, Container, Row, Col, Form } from 'react-bootstrap'
import usericon from '../images/user.png';
import createDonationImage from '../images/create_donation.png';

class CreateDonation extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px', width:'80%'}}>
                <Row>
                    <Col xs={9}>
                        
                        <div style={{ clear: 'both', display: 'flex' }}>
                            <div style={{ width: '100%' }}>
                                <div className="page-headings"><b>Create Donation Scheme</b></div>
                                <div className="page-subheadings">You can raise funds for a cause and specify the maximum amount for donation.</div>
                            </div>
                        </div>
                    
                        
                        <div style={{width:'80%', paddingTop:'50px'}}>
                            <small>Name of cause</small>
                            <InputGroup className="mb-3">
                                <FormControl aria-label="Name of cause"/>
                            </InputGroup>
                        </div>
                        <div style={{width:'80%'}}>
                            <small>Description</small>
                            <InputGroup className="mb-3" style={{height:'150px'}}>
                                <FormControl as="textarea" aria-label="Description"/>
                            </InputGroup>
                        </div>
                        <div>
                            <small>Amount to be raised.</small>
                        </div>

                        <div style={{ width: '80%'}}>
                            <div>
                            
                            <Form inline>
                                <Form.Group>
                                    <Form.Label>TOKENS</Form.Label>
                                    <Form.Control
                                    className="mx-sm-3"
                                    id="inputPassword6"
                                    aria-describedby="passwordHelpInline"
                                    style={{width: '70px'}}
                                    />   
                                    <button className="donation-card-button" style={{color:'#FFFFFF', paddingTop: '10px', float: 'right', right: '0'}}>Submit</button> 
                                </Form.Group>
                            </Form> 
                                          
                                
                            </div>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div>
                            <div style={{ clear: 'both', display: 'flex', float:'right'}}>
                                
                                <div className="donor-name" >
                                    <span>NGO Name</span>
                                    <img src={usericon} style={{ height: '36px', width: '36px', marginLeft: '10px'}} alt="User"/>
                                </div>
                            </div>
                            <div style={{height:'100%', float:'right'}}>
                                <img src={createDonationImage} style={{ height: '200px', width: '200px', marginLeft: '10px', maxHeight: '100%', maxWidth: '100%', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', margin: 'auto'}} alt="User"/>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
                
                
            </Container>
            
         );
    }
}
 
export default CreateDonation;