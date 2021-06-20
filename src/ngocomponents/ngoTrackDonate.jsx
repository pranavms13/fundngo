import React, { Component } from 'react'
import coinwhite from '../images/coin_white.png'

class NgoTrackDonate extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() { 
        return ( 
            <div className="total-donate-card" style={{display:'flex'}}>
            <div style={{ width: '80%' }}>
                <div style={{ display: 'flex' }}>
                    <div className="page-headings" style={{ fontSize: '25px' }}>{this.props.dono.donation_name}</div>
                    <div className="dsc-date">
                        &#128197; {this.props.dono.donation_date}
                    </div>
                </div>
                
                
                <div style={{ maxWidth: '100%', height:'100px', maxHeight: '100px' , overflow: 'auto'}}>
                    {this.props.dono.donation_desc}
                </div>
            </div>
            
            
            <div className="fund-token-card" style={{ background: '#eeeeee' }} >
                <div style={{fontSize: '20px', fontWeight: 'bold'}}>Total Funds Raised</div>
                <div style={{ fontWeight: 'bold', fontSize: '30px' , paddingLeft: '15px', paddingTop: '20px'}}>
                    <b>{this.props.dono.amountraised}</b> <font style={{fontSize: '15px'}}>TOKENS</font>
                </div>
            </div>

            <div className="fund-token-card" style={{ background: '#2F3E46', color: '#ffffff', letterSpacing: '1px'}}>
                <img src={coinwhite} alt="Coin" style={{ width: '65px', height: '65px' }}/>
                <div style={{ fontWeight: 'bold', fontSize: '30px' , paddingTop: '20px'}}>
                    <b>{this.props.dono.amountused}</b><font style={{fontSize: '15px'}}>/{this.props.dono.amountraised}</font>
                    <div>
                        <font style={{fontSize: '15px'}}>TOKENS USED</font>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default NgoTrackDonate;