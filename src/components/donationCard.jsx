import { Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { Component } from 'react'

class DonationCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="donations-card">
                <div>
                    <Button>Back</Button>
                    <Button style={{float:'right'}}>Share</Button>
                    <Button style={{float:'right'}}>Report</Button>
                </div>
                <div>
                    <div style={{marginTop:'30px'}}>
                    <h4>Food Donations</h4>
                    <small style={{float:'right'}}>Published on Mar 12th, 2021</small>
                    </div>
                    <small>More about this scheme</small>
                    <div style={{color:'#CAD2C5', marginTop:'30px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia lectus nibh arcu viverra. Faucibus nulla sed facilisis senectus interdum scelerisque. Sit tincidunt scelerisque suspendisse blandit arcu, quis massa nunc. Amet, massa auctor suspendisse turpis tellus, urna. Pellentesque id nibh ultrices turpis vitae in felis.
Sollicitudin luctus vulputate a, massa, eu ultrices euismod sit elementum. Vitae mattis mattis in purus neque imperdiet. Phasellus accumsan, elementum id et scelerisque. Eget eget dui natoque euismod morbi.
                    
                    </div>
                    <div style={{marginTop:'30px'}}>
                        Enter the number of tokens you wish to donate to this scheme

                    </div>
                    <div style={{marginTop:'30px'}}>
                    <InputGroup className="mb-3" style={{width:'200px'}}>
                        <FormControl aria-label="Last name"/>
                        TOKENS
                    </InputGroup>
                    </div>
                    <div style={{marginTop:'50px'}}>
                        <Button className="donation-card-button">Donate</Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DonationCard;