import React from 'react';
import './App.css';
import Form from './Components/Form'
import AllRestaurants from './Components/AllRestaurants';
// import Graph from './Components/Graph';
import Chart from './Components/Chart';
import NotFound from './Components/NotFound';
import NoGraph from './Components/NoGraph';
import axios from'axios';

// main parent component
class App extends React.Component {
  state = {
    visibleForm: true,
    visibleRestList: false,
    visibleGraph: false,
    visibleNotFound: false,
    visibleNoGraph: false,
    allRestArr: [],
    restaurantName: ''
  }

  handleName = () => {
    return this.state.restaurantName;
  }

  handleChange = (event) => {
    this.setState({ 
      restaurantName : event.target.value 
    });
  }

  searchRestaurants = (event) => {
    event.preventDefault();
    axios.get('https://api.foursquare.com/v2/venues/explore?client_id=M5JXUH3CLTCV5QUBOZLCT4XFKYZZGO2GYIMJYA2KXLACLHCB&client_secret=G3EU2UIZDHKV2L1IXGKDPMNTMUW3LK0LCT3PSXL2NOXJHTOC&v=20180323&ll=51.4996089,-0.22557100000000002&radius=100000&limit=100&query=Restaurant')
    .then(res => {
      this.setState({
        allRestArr: res.data.response.groups[0].items,
        visibleForm: false,
        visibleRestList: true
      })
    })
    .catch(err => console.log('There was an error:' + err))
  }

  // managing states on the components being rendered on clicking different buttons
  back = (event) => {
    event.preventDefault();
    this.setState({
      visibleForm: true,
      visibleRestList: false,
      visibleGraph: false,
      visibleNotFound: false,
      visibleNoGraph: false
    });
  }

  graph = (event) => {
    event.preventDefault();
    this.setState({
      visibleForm: false,
      visibleRestList: false,
      visibleGraph: true,
      visibleNotFound: false,
      visibleNoGraph: false
    });
  }

  graphBack = (event) => {
    event.preventDefault();
    this.setState({
      visibleForm: true,
      visibleRestList: false,
      visibleGraph: false,
      visibleNotFound: false,
      visibleNoGraph: false
    });
  }

  graphList = (event) => {
    event.preventDefault();
    this.setState({
      visibleForm: false,
      visibleRestList: true,
      visibleGraph: false,
      visibleNotFound: false,
      visibleNoGraph: false
    });
  }

  notFoundBack = (event) => {
    event.preventDefault();
    this.setState({
      visibleForm: true,
      visibleRestList: false,
      visibleGraph: false,
      visibleNotFound: false,
      visibleNoGraph: false
    });
  }

  NoGraphBack = (event) => {
    event.preventDefault();
    this.setState({
      visibleForm: true,
      visibleRestList: false,
      visibleGraph: false,
      visibleNotFound: false,
      visibleNoGraph: false
    });
  }

  

  render() {
    return (
      // conditional rendering of child components
      <div className="App">
        <h2>Your Restaurant Finder</h2>
          <div className="container">
            { this.state.visibleForm ? <Form searchRestaurants={this.searchRestaurants} handleChange={this.handleChange}/> : null }
            { this.state.visibleRestList ?  <AllRestaurants handleName={ this.handleName } back={this.back} graph={this.graph} allRestArr={this.allRestArr}/> : null  }
            {/* { this.state.visibleGraph ? <Graph graphBack={this.graphBack} graphList={this.graphList} allRestArr={this.allRestArr}/> : null } */}
            { this.state.visibleGraph ? <Chart graphBack={this.graphBack} graphList={this.graphList} allRestArr={this.allRestArr}/> : null }
            { this.state.visibleNotFound ? <NotFound notFoundBack={this.notFoundBack} graphList={this.graphList}/> : null }
            { this.state.visibleNoGraph ? <NoGraph noGraphBack={this.noGraphBack} /> : null  }
          </div>
      </div>
    );
  } 
}

export default App;
