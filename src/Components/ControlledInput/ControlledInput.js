'strict-mode'

import React, { useState, useEffect } from 'react';


export default function Form (props){
const [name, setName] = useState('Twin')

useEffect(() => {
    document.title = name;
    console.log("effect running")
})

function handleNameChange(e){
    setName(e.target.value)
}
    return(
        <section>
            <p>{name}</p>
            <input value={name} onChange={handleNameChange}></input>
        </section>
    )
}