import React from 'react'

export default function Country(props) {
    const name = props.match.params.name;
    console.log(name);
    return (
        <div>
            Country: {name}
        </div>
    )
}
