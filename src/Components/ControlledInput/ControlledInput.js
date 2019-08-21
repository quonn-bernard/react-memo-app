'strict-mode'
import React from 'react';
import ValidationError from '../../Components/ValidationErrors/ValidationError';

export default function Form(props) {
    
    // calls handleSubmit() from App onSubmit
    // Validation Error is rendered if input value length is less than 4 
    // button is disabled when validation error is true 
    return (
        <section >
            <form onSubmit={(e) => props.submit(e)} className="box-shadow">
                <h3>Add A Memo</h3>
                <ValidationError error={props.memoError}></ValidationError>
                <input type="text" value={props.memo} onChange={(e) => props.nameChange(e)} placeholder="Type Some Input" className={props.memoError !== "" ? "red-border" : ''}></input>
                <button type="submit" className={props.memoError !== "" || props.memo.length === 0 ? "disabled fa fa-file-alt" : ''}>{props.icon} Add Memo </button>
            </form>
            {props.children}
        </section>
    )
}