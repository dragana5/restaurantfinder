import React       from 'react';
import ScatterPlot from './scatter-plot';

const styles = {
  width   : 900,
  height  : 600,
  padding : 30
};

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
  }

  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

  render() {
    return <div>
      <button onClick={ this.props.graphBack } className="btn btn-secondary btn-outline-dark ">Go back to search</button>
      <button onClick={ this.props.graphList } className="btn btn-secondary btn-outline-dark ">Go back to restaurants list</button> 
      <ScatterPlot {...this.state} {...styles} />
      <div className="controls">
        <button className="btn btn btn-secondary btn-outline-dark" onClick={() => this.randomizeData()}>
          Randomize Data
        </button>
        
      </div>
    </div>
  }
}


export default Chart;