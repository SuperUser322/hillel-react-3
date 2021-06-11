import React, { Component } from "react";

import Cat from './Task1/Cat';

class App1 extends Component {
  state = {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX-40,
      y: e.clientY-40,
    });
  }

  render() {
    return (
      <div className="firstTask" >
          <Cat mouse={this.state} handleMouseMove={this.handleMouseMove} />
      </div>
    );
  }

}

export default App1;
