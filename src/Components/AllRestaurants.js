import React from 'react';
import '../AllRestaurants.css';
import axios from'axios';

class AllRestaurants extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        restName: '',
        rest: [],
        allRestArr: []
      }
  }
  // when component/view loads a call to API will be made and the data retrieved will be used to be rendered
  componentDidMount() {
    axios.get('https://api.foursquare.com/v2/venues/explore?client_id=M5JXUH3CLTCV5QUBOZLCT4XFKYZZGO2GYIMJYA2KXLACLHCB&client_secret=G3EU2UIZDHKV2L1IXGKDPMNTMUW3LK0LCT3PSXL2NOXJHTOC&v=20180323&ll=51.4996089,-0.22557100000000002&radius=100000&limit=50&query=Restaurant')
    .then(res => {
      this.setState({
        allRestArr: res.data.response.groups[0].items
      })
    })
    .catch(err => console.log('There was an error:' + err))
  }
  
  render() {
      return (
        <div>
            <div className="top">
              <button onClick={ this.props.back } className="btn btn-secondary btn-outline-dark">Go back to search</button>
            </div>
            { this.state.allRestArr.map((rest) => (
                <div key={rest.referralId} className="card">
                  <div className="card-body">
                    <h4 className="card-title">{rest.venue.name}</h4>
                    <h5 className="card-subtitle mb-3">{rest.venue.categories["0"].shortName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{rest.venue.location.address}</h6>
                    <button onClick={ this.props.graph } className="btn btn-secondary btn-lg btn-outline-dark">See similar restaurants to this one</button>
                  </div>
                </div>
            )) } 
        </div>
      )
    }
}

export default AllRestaurants;