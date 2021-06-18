import React, { Component } from 'react'
import { Button, InputGroup, FormControl, Card, Container } from 'react-bootstrap'
import usericon from '../images/user.png';

class CreateDonation extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px'}}>
                <div>
                    <div style={{ clear: 'both', display: 'flex' }}>
                        <div style={{ width: '65%' }}>
                            <div className="page-headings"><b>Tracking Donations</b></div>
                            <div className="page-subheadings">Keep track of all your donations and how many tokens you have raised for each cause.</div>
                        </div>
                        <div className="donor-name" >
                            <span>Donor Name</span>
                            <img src={usericon} style={{ height: '36px', width: '36px', marginLeft: '10px'}} alt="User"/>
                        </div>
                    </div>
                </div>
                    
            
                
                <div style={{width:'80%'}}>
                    <small>Name of cause</small>
                    <InputGroup className="mb-3" style={{width:'200px'}}>
                        <FormControl aria-label="Name of cause"/>
                    </InputGroup>
                </div>
                <div style={{width:'80%'}}>
                    <small>Description</small>
                    <InputGroup className="mb-3" style={{width:'600px', height:'150px'}}>
                        <FormControl as="textarea" aria-label="Description"/>
                    </InputGroup>
                </div>
                <div style={{width:'80%'}}>
                    <small>Amount to be raised</small>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default"  >TOKENS</InputGroup.Text>
                        <FormControl style={{width:'50%'}}/>  
                    </InputGroup>                 
                    <button className="donation-card-button" style={{float:'right', color:'#FFFFFF'}}>Submit</button>
                </div>
            </Container>
            
         );
    }
}
 
export default CreateDonation;