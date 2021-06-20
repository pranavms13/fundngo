import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import coin from '../images/coin.png';

class DonorBalanceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            balance: null
        }
    }
    async componentDidMount(){
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const account = accounts[0];
        // this.setState({wallet: account});
        this.setState({
            balance: this.props.balance
        });
    }
    render() { 
        return (
            <div className="donor-balance-card">
                <div style={{fontSize: '30px' }}>Balance</div>
                <div style={{ display: 'flex' , marginLeft: '20px', marginTop: '20px'}}>
                    <img src={coin} style={{ width: '76px', height: '76px' }} alt="COIN"/>
                    <div style={{ fontWeight: 'bold', fontSize: '30px' , paddingLeft: '15px', paddingTop: '20px'}}>
                        <b>{this.state.balance===0?"0.00":this.state.balance}</b> <font style={{fontSize: '15px'}}>FND</font>
                    </div>
                </div>
                <div style={{marginTop: '25px'}}>
                    <Button className="add-tokens">Go to purchase items</Button>
                </div>
            </div>
        );
    }
}

export default DonorBalanceCard;