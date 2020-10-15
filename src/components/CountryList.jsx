import React, { Component } from 'react'
import Data from '../Data';

class UserList extends Component {
    render() {
        console.log(Data)
        return (
            <div className="countryContainer">
                {Data.map((ct,i) => {
                    return (<div key={i} className="countryCard"> 
                                <h1>{ct.name}</h1> 
                                <span>{ct.nativeName}</span> 
                            </div> 
                        )
                })}
            
            </div>
            
        )
    }
}


export default UserList;