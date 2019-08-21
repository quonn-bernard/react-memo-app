'strict-mode'
import React from 'react';
import '../../App.css';

export default function ValidationError(props) {

    // renders whenever memoError state variable in root is true
    return (
        <div className="error">
            {props.error}
        </div>
    )
} 