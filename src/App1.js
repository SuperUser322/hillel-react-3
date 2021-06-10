import React, { Component } from "react";

import Cat from './Task1/Cat';
import Mouse from './Task1/Mouse';

class App1 extends Component {

  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div className="firstTask">
        <Mouse render={this.renderTheCat} />
      </div>
    );
  }

}

export default App1;
