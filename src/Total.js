import React from 'react'
import "./Total.css"

class Total extends React.Component{

    render(){

        const total = Object.keys(this.props.stateSelected)
        .reduce((acc, curr) => acc + this.props.stateSelected[curr].cost, 0);    

        return(
            
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
            </div>
            
        );
    }

}

export default Total