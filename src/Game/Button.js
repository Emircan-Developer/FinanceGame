import React from 'react'
import "./button.css"

const financeButton = (props) => {
    const{Name,Number,Main} = props;
    return(
        <button 
            className="Button"
            
            onClick={() => Main.selected(Number)}
        >
            {Name}
        </button>
    );

}
export default financeButton;