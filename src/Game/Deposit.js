import React from 'react'

import "./button.css"

const DepositButton = (props) => {
    return(
    <button 
        className="Button"
            onClick={() => props.main.calculate()}
    >
        Deposit
    </button>
    );
}
export default DepositButton;