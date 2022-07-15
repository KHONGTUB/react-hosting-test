import React from 'react';

export function Button(props){
    const {label = 'default', handleClick = () => console.log('I am default')} = props
    return <button onClick={handleClick}>{label}</button>
}

