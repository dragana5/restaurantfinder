import React from 'react';
import { select } from 'd3';
import '../Graph.css';

import * as d3 from 'd3'
import axios from'axios';


class Graph extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      graphData: [],
      nodes: [],
      links: []
    }
  }

      

  componentDidMount() {
    axios.get('https://api.foursquare.com/v2/venues/explore?client_id=M5JXUH3CLTCV5QUBOZLCT4XFKYZZGO2GYIMJYA2KXLACLHCB&client_secret=G3EU2UIZDHKV2L1IXGKDPMNTMUW3LK0LCT3PSXL2NOXJHTOC&v=20180323&ll=51.4996089,-0.22557100000000002&radius=100000&limit=100&query=Restaurant')
    .then(res => {
      this.setState({
        graphData: res.data.response.groups[0]
      })
    
      this.setState({
        nodes: this.state.graphData.items.map(d => Object.create(d)),
        links:  
        [{"source": 0, "target": 1, "value":  30, "id": 'Japanese'},
        {"source": 0, "target": 2, "value":  5, "id": 'Vegetarian / Vegan'},
        {"source": 1, "target": 3, "value":  0, "id": 'Restaurant'},
        {"source": 2, "target": 0, "value":  20, "id": 'Cafe'}]
      });

      console.log('nodes', this.state.nodes);
      console.log('es.data.response.groups[0].items',this.state.graphData);

      const nodes = this.state.nodes;
      const links = this.state.links;
      const svg = d3.select('#target'),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            color = d3.scaleOrdinal(d3.schemeCategory10);

      const simulation = d3.forceSimulation(this.state.nodes)
            .force("charge", d3.forceManyBody().strength(-1000))
            .force("link", d3.forceLink(this.state.links).distance(200))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .alphaTarget(1)
            .on("tick", ticked);
      
      const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
            link = g.append("g").attr("stroke", "#000").attr("stroke-width", 1.5).selectAll(".link"),
            node = g.append("g").attr("stroke", "#fff").attr("stroke-width", 1.5).selectAll(".node");

      restart();

      // d3.timeout(function() {
      //     links.push({source: a, target: b}); // Add a-b.
      //     links.push({source: b, target: c}); // Add b-c.
      //     links.push({source: c, target: a}); // Add c-a.
      //     restart();
      // }, 3000);

      // d3.interval(function() {
      //     nodes.pop(); // Remove c.
      //     links.pop(); // Remove c-a.
      //     links.pop(); // Remove b-c.
      //     restart();
      // }, 12000, d3.now());

      // d3.interval(function() {
      //     nodes.push(c); // Re-add c.
      //     this.state.links.push({source: b, target: c}); // Re-add b-c.
      //     this.state.links.push({source: c, target: a}); // Re-add c-a.
      //   restart();
      // }, 12000, d3.now() + 3000);


      function restart() {

        // Apply the general update pattern to the nodes.
        node = node.data(nodes, function(d) { return d.id;});
        node.exit().remove();
        node = node.enter().append("circle").attr("fill", function(d) { return color(d.id); }).attr("r", 8).merge(node);
      
        // Apply the general update pattern to the links.
        link = link.data(links, function(d) { return d.source.id + "-" + d.target.id; });
        link.exit().remove();
        link = link.enter().append("line").merge(link);
      
        // Update and restart the simulation.
        simulation.nodes(nodes);
        simulation.force("link").links(links);
        simulation.alpha(1).restart();
      }
      
      function ticked() {
        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
      
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
      }

  }
  
  
  render() {

    return (
      <div className="buttons" ref={(node) => this.node = node}>
          <button onClick={ this.props.graphBack } className="btn btn-secondary btn-outline-dark ">Go back to search</button>
          <button onClick={ this.props.graphList } className="btn btn-secondary btn-outline-dark ">Go back to restaurants list</button>        
          <svg id="target" >
          </svg>
      </div>
    )

  }
}

export default Graph;