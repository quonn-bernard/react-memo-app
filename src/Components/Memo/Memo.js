import React from 'react';

export default function Memo(props) {

    // renders a memo
    // renders all children and displays memo value 
    return (
        <div className="memo box-shadow">
            <span>{props.memVal}</span>
            {props.children}
        </div>
    )
}