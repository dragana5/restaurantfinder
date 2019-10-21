import React from 'react';
import '../Form.css';
// import axios from'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restaurantName: '', 
      apiKey: '2336'
    }
  }

  // rendering form with two text fields and a submit button
  render() {
    return (
      <form onSubmit={this.props.searchRestaurants} className="form">
        <input
          type="text"
          className="form-control"
          placeholder="API Key"
        />
        <input
          type="text" 
          placeholder="Restaurant Name"
          className="form-control"
          value={this.props.restaurantName}
          onChange={this.props.handleChange}
        />
        <button type="submit" className="btn btn-secondary btn-lg btn-outline-dark btn-block">Find your restaurant</button> 
      </form>
      
    )
  }
}

export default Form;