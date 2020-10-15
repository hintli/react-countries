import React from 'react'
import axios from 'axios';

class Country extends React.Component {
    
    
    // componentDidMount() {
    //     let name = this.props.match.params.name;
    //     axios.get("https://restcountries.eu/rest/v2/name/'+name+'?fullText=true")
    //     .then(rsp => {
    //         console.log(rsp.data);
    //     })
    // }
    
    
    
    render() {
        let name = this.props.match.params.name;
        console.log(name);
        return (
            <div>
                Country: {name}
            </div>
        )
    }
} 

export default Country;
