import React, { Component } from 'react'
import Data from '../Data';
import {NavLink} from 'react-router-dom'

class UserList extends Component {
    render() {
        console.log(Data)
        return (
            <div className="countryContainer">
                {Data.map((ct,i) => {
                    return (<div key={i} className="countryCard"> 
                                <NavLink  to={'/:'+ct.name}>
                                        <h1 style={{fontSize:25}} >{ct.name}</h1> 
                                </NavLink>
                                <span>{ct.nativeName}</span> 
                            </div> 
                        )
                })}
            
            </div>
            
        )
    }
}


export default UserList;