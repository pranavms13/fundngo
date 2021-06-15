import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Div } from 'react-bootstrap';

class totalDonatePage extends Component {
    state = {  }
    render() { 
        return ( 
            
                
                <div className="total-donate-card" style={{display:'flex'}}>
                    <div>
                        <h4>Food Donation</h4>
                        <div className="dsc-date">
                                12th May, 2021
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend quam leo, eget at. 
                                A consectetur hendrerit est magna non molestie sit condimentum. Quam odio neque.</p>
                        <Button variant="primary" type="submit">
                                DONATE NOW
                        </Button>
                        
                    </div>
                    
                    
                    <div className="total-donate-card" style={{background: '#EEEEEE', width: '250px', height: '220px'}}>
                        <p>Total Funds Raised</p>
                        <h4>400</h4>
                        <p>tokens</p>
                    </div>
                </div>
                        
                
            
         );
    }
}
 
export default totalDonatePage;