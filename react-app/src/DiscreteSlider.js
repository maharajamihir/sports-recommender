import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

function changed(value) {

}

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        {props.name}
      </Typography>
      <Slider
        onChange={changed}
        defaultValue={0.5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.1}
        marks
        min={0.0}
        max={1.0}
        valueLabelDisplay="auto"
      />
    </div>
  );
}