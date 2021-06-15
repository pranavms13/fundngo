import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import coin from '../images/coin.png';

class DonorBalanceCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            wallet : ""
        }
    }
    state = {  }
    async componentDidMount(){
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const account = accounts[0];
        // this.setState({wallet: account});
        
    }
    render() { 
        return (
            <div className="donor-balance-card">
                <div style={{fontSize: '30px' }}>Balance</div>
                <div style={{ display: 'flex' , marginLeft: '20px', marginTop: '20px'}}>
                    <img src={coin} style={{ width: '76px', height: '76px' }} alt="COIN"/>
                    <div style={{ fontWeight: 'bold', fontSize: '30px' , paddingLeft: '15px', paddingTop: '20px'}}>
                        <b>10000</b> <font style={{fontSize: '15px'}}>TOKENS</font>
                    </div>
                </div>
                <div style={{marginTop: '25px'}}>
                    <Button className="add-tokens">ADD TOKENS</Button>
                </div>
            </div>
        );
    }
}

export default DonorBalanceCard;