import React from 'react';

export default function FormSubmitBtn(props){

    return(
        
            <button className={props.memoError !== "" || props.memo.length < 3 ? "disabled form-submit-btn btn-shadow" : "visible form-submit-btn btn-shadow"} onClick={(e)=>{props.click(e)}} > {props.pencilIcon} {props.name}</button>
        
    )
}