import React, { Component } from 'react';

class TxRow extends Component {
    state = {  }
    render() { 
        return (
            <div className="txrow">
                <div style={{ width: '15%',display: 'inline-block' }}>
                    1.
                </div>
                <div style={{ width: '25%', color: '#CBE896',display: 'inline-block' }}>
                    100 TOKENS
                </div>
                <div style={{ width: '60%', display: 'inline-block', fontWeight: 'bold' }}>
                    18th May, 2021
                </div>
            </div>
        );
    }
}
 
export default TxRow;