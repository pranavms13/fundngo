import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import coinwhite from '../images/coin_white.png'

class TotalDonate extends Component {
    state = {  }
    render() { 
        return ( 
            
                
                <div className="total-donate-card" style={{display:'flex'}}>
                    <div style={{ width: '80%' }}>
                        <div style={{ display: 'flex' }}>
                            <div className="page-headings" style={{ fontSize: '25px' }}>Food Donation</div>
                            <div className="dsc-date">
                                &#128197; 12th May, 2021
                            </div>
                        </div>
                        
                        
                        <div style={{ maxWidth: '100%', height:'100px', maxHeight: '100px' , overflow: 'auto'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend quam leo, eget at. 
                            A consectetur hendrerit est magna non molestie sit condimentum. Quam odio neque.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend quam leo, eget at. 
                            A consectetur hendrerit est magna non molestie sit condimentum. Quam odio neque.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend quam leo, eget at. 
                            A consectetur hendrerit est magna non molestie sit condimentum. Quam odio neque.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend quam leo, eget at. 
                            A consectetur hendrerit est magna non molestie sit condimentum. Quam odio neque.
                        </div>
                        <div>
                            <div style={{width: '230px', height: '40px', background: '#CBE896', color: '#7D9257', borderRadius: '8px', padding: '8px', textAlign: 'center', marginTop: '10px'}}>
                                Donation Made : <b>50 Tokens</b>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    
                    <div className="fund-token-card" style={{ background: '#eeeeee' }} >
                        <div style={{fontSize: '20px', fontWeight: 'bold'}}>Total Funds Raised</div>
                        <div style={{ fontWeight: 'bold', fontSize: '30px' , paddingLeft: '15px', paddingTop: '20px'}}>
                            <b>10000</b> <font style={{fontSize: '15px'}}>TOKENS</font>
                        </div>
                    </div>

                    <div className="fund-token-card" style={{ background: '#2F3E46', color: '#ffffff', letterSpacing: '1px'}}>
                        <img src={coinwhite} alt="Coin" style={{ width: '65px', height: '65px' }}/>
                        <div style={{ fontWeight: 'bold', fontSize: '30px' , paddingTop: '20px'}}>
                            <b>500</b><font style={{fontSize: '15px'}}>/1000</font>
                            <div>
                                <font style={{fontSize: '15px'}}>TOKENS USED</font>
                            </div>
                        </div>
                    </div>
                </div>
                        
                
            
         );
    }
}
 
export default TotalDonate;