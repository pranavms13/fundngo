import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Rice from '../images/rice.png'

class PurchaseCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="purchase-card" style={{maxHeight:'250px', maxWidth: '250px'}}>
                <div style={{marginTop: '15px'}}>
                    <img src={Rice} style={{width: '50px', height: '50px'}}/>
                    <div style={{paddingTop: '10px'}}>Food Grains</div>
                    <div style={{paddingTop: '10px'}}>5 Tokens</div>
                    
                    <div style={{display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: '25px'}}>
                        <div style={{display: 'flex'}}>
                            <div style={{borderColor: '#2f3e46'}}>
                                <Button className="purchase-button" style={{marginRight:'20px', width: "65px", textAlign: 'center', borderWidth: '2px', backgroundColor: '#2f3e46', color: '#ffffff'}}>Add</Button>
                            </div>
                            
                            <div style={{borderColor: '#2f3e46', borderStyle: 'solid', borderRadius: '8px', borderWidth: '2px'}}>
                                <Button className="purchase-button" type="button" style={{borderStyle: 'none', height: '35px'}}>-</Button>
                                <input type="type" value="1" style={{borderStyle:'none', width: '50px', height: '32px', textAlign: 'center'}}></input>
                                <Button className="btn plus-btn purchase-button" type="button" style={{borderStyle:'none', height: '35px'}}>+</Button>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default PurchaseCard;