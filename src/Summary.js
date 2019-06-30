import React from 'react'
import "./Summary.css"
import Total from "./Total"

class Summary extends React.Component{

    render(){

        const summary = Object.keys(this.props.stateSelected).map(key => 
            <div className="summary__option" key={key}>
                <div className="summary__option__label">{key} </div>
                <div className="summary__option__value">{this.props.stateSelected[key].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.stateSelected[key].cost) }
                 </div>
            </div>)
        
        return(

            <div>

            <h3>NEW GREENLEAF 2018</h3>

            {summary}
            
            <Total stateSelected={this.props.stateSelected}/>

            </div>
             
        )
    }

}

export default Summary