import React, { Component } from 'react'
import Data from '../Data';
import CountryCard from './CountryCard'
import axios from 'axios';



class UserList extends Component {

    state = {
        countries: []
    }

    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(rsp => {
            //console.log(rsp.data)
            this.setState({
                countries:rsp.data
            })
        })
    }

    render() {
        const {countries} = this.state;
        return (
            <div className="countryContainer">
                {countries.map((country,i) => {
                    return (<div key={i} className="countryCard"> 
                                <CountryCard country={country} />
                            </div> 
                        )
                })}
            
            </div>
            
        )
    }
}


export default UserList;