import React, { Component } from 'react'
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap'

class CreateDonation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "ngo-create-scheme" style={{backgroud:'#E5E5E5;'}}>
                <div>
                    <h4>Create Donation Scheme</h4>
                    <small style={{color:'#CAD2C5'}}>You can raise funds for a cause and specify the maximum amount for donation.</small>

                </div>
                <div>
                    <small>Name of cause</small>
                    <InputGroup className="mb-3" style={{width:'200px'}}>
                        <FormControl aria-label="Name of cause"/>
                    </InputGroup>
                </div>
                <div>
                    <small>Description</small>
                    <InputGroup className="mb-3" style={{width:'600px'}}>
                        <FormControl aria-label="Description"/>
                    </InputGroup>
                </div>
                <div>
                    <small>Amount to be raised</small>
                    <Card style={{width:'120px', border:'1px solid #354F52', boxSizing: 'border-box', borderRadius: '7px'}}>
                        <Card.Body>TOKENS</Card.Body>
                        <Card.Body>99.00</Card.Body>    
                    </Card>                    
                    <button className="donation-card-button" style={{float:'right', color:'#FFFFFF'}}>Submit</button>
                </div>
            </div>
         );
    }
}
 
export default CreateDonation;