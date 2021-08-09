import { Button } from '@material-ui/core';
import React from 'react';
import DiscreteSlider from './DiscreteSlider';

export default function App() {
  var data = "Data";

  const sendData = () => {
    data = "pressed";
    return 0;
  };

  return (
    <div>
      <DiscreteSlider name="Strength" />
      <Button onClick={sendData}>Submit</Button>
      <h1>{data}</h1>
    </div>
  );
}