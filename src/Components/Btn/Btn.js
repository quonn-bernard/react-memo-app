import React from 'react';

export default function Btn(props){

    // renders on memo div
    //accepts several props such as icons, method, and name vale which is displayed on the button
    return(
        <div>
            <button className="memo-btn btn-shadow" onClick={()=>{props.click(props.id)}} >{props.trashIcon} {props.pencilIcon} {props.name}</button>
        </div>
    )
}