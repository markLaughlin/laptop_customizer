import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Summary from "./Summary"
import Features from "./Features"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }


  render() {

    return (
      <div className="App">
       
        <Header/>
         
        <main>

          <section className="main__form">
            <Features
            features={this.props.features}
            stateSelected={this.state.selected}
            updateFeature={this.updateFeature}
            />
          </section>

          <section className="main__summary">
            <Summary stateSelected={this.state.selected}/>
          </section>
        </main>

      </div>
    );
  }
}

export default App;  
