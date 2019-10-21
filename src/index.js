import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import AllRestaurants from './AllRestaurants';
// import Graph from './Graph';

// const routing = (
//     <Router>
//       <div>
//         <Route path="/" component={App} />
//         <Route path="/allrestaurants" component={AllRestaurants} />
//         <Route path="/graph" component={Graph} />
//       </div>
//     </Router>
//   )

// ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
