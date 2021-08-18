import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import DiscreteSlider from './DiscreteSlider';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "Unclicked",
      stats: [],
      recommendation: []
    }
  }

 sendData = () => {
    this.setState({
      data: "Clicked!!"
    });
  }

render(){
  return (
    <div>
      <DiscreteSlider name="Strength" />
      <Button onClick={this.sendData}>Submit</Button>
      <h1>{this.state.data}</h1>
    </div>
  );
}
}

export default App;