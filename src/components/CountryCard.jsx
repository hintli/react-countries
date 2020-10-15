import React from 'react'
import {NavLink} from 'react-router-dom'

function CountryCard(data) {
    //console.log(data.country.name)
    const country = data;
    return (
        <div>
            <NavLink to={'/:' + data.country.name}>
                <h1 style={{ fontSize: 25 }} >{data.country.name}</h1>
            </NavLink>
            <span>{data.country.nativeName}</span>
        </div>

    )
}

export default CountryCard;