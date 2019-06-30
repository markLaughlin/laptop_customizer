import React from 'react'
import "./Features.css"

class Features extends React.Component{

    render(){

        const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.props.stateSelected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  onClick={e => this.props.updateFeature(key, item)}
                  >
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });
  
            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });     
  
        return(
            <div>
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>

                { features }


            </div>

        );
    }
}

export default Features