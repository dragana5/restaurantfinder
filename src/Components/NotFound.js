import React from 'react';
import '../NotFound.css';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Sorry, we could not find any restaurants for you at this moment</h3>
                <button onClick={ this.props.notFoundBack } className="btn btn-secondary btn-lg btn-outline-dark ">Go back to search</button>        
            </div>
        )
    }
}

export default NotFound;