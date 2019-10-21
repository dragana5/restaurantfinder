import React from 'react';
import '../NoGraph.css';

class NoGraph extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>Ooops, something went wrong</h3>
                <button onClick={ this.props.NoGraphBack } className="btn btn-secondary btn-lg btn-outline-dark ">Go back to search</button>        
            </div>
        )
    }
}

export default NoGraph;