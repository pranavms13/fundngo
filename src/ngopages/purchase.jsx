import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';

import PurchaseCard from '../ngocomponents/purchaseCard';
import usericon from '../images/user.png';


class Purchase extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            show: false
         }
        this.handleClose = this.handleClose.bind(this)
    }
    

     handleClose() {
        this.setState({show: false}) 

     }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px'}}>
                <div>
                    <div style={{ clear: 'both', display: 'flex' }}>
                        <div style={{ width: '75%' }}>
                            <div className="page-headings"><b>Purchase items</b></div>
                            <div className="page-subheadings">Purchase items for donating through trusted vendors.</div>
                        </div>
                        <div className="donor-name" style={{ float:'right'}}>
                            NGO Name
                            <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                        </div>
                    </div>
                </div>

                <Row style={{marginTop: '10px'}}>
                    <Col>
                        <div style={{width:'85%'}}>
                            <Dropdown> 
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{textAlign: 'left',width: '90%',background: '#FFFFFF', borderStyle: 'none', color: '#354F52'}}>
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{float: 'right'}}>
                                    <Dropdown.Item href="#/action-1">Food donation</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Oxygen Cylinder</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Clothes Donation</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                             
                        </div>
                        
                    </Col>
                    <Col>
                        <div style={{width:'85%'}}>
                            <Button onClick={() => {this.setState({show: !this.state.show})}} className="donation-card-button" style={{float:'right'}}>Go to Purchase</Button> 
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={12}>
                        <div style={{ maxHeight: '600px', overflowX: 'auto' }}>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <PurchaseCard/>
                                <PurchaseCard/>
                                <PurchaseCard/>
                            </div>
                            <div style={{ display: 'flex', maxWidth: '100%', overflowX: 'auto' }}>
                                <PurchaseCard/>
                                <PurchaseCard/>
                                <PurchaseCard/>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Modal show={this.state.show} onHide={this.handleClose} style={{borderRadius: '15px'}}>
                    <Modal.Header closeButton>
                        <div style={{color: '#CAD2C5', marginLeft: '35px', fontSize: '20px'}}>Purchase Total</div>
                    
                    
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{marginLeft: '35px', color: '#354F52'}}>
                            <div style={{ fontSize: '50px'}}>
                            2150
                            <small style={{marginLeft: '5px', fontSize:'20px'}}>FND</small>
                            </div>
                            
                        </div>
                        
                        <table style={{marginLeft: '35px'}}>
                            <tr>
                                <td style={{width: '15%'}}>Food Grains</td>
                                <td style={{width: '15%'}}>x3</td>
                                <td style={{width: '15%'}}>15 TOKENS</td>
                            </tr>
                            <tr>
                                <td>Food Grains</td>
                                <td>x3</td>
                                <td>15 TOKENS</td>
                            </tr>
                            <tr>
                                <td>Food Grains</td>
                                <td>x3</td>
                                <td>15 TOKENS</td>
                            </tr>
                        </table>
                        
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{float:'right', marginRight: '60px'}}>
                            <Button className="purchase-btn">Purchase</Button>
                        </div>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                    </Modal.Footer>
                </Modal>

            </Container>
        );
    }
}
 
export default Purchase;