import React, { Component } from "react";

import catsvg from './bengal-cat.svg';

class Cat extends Component {

  render() {
    const mouse = this.props.mouse;
    return (
      <img title="Хочу жрать!" className="stalkingKitty" src={catsvg} style={{
        position: 'absolute',
        left: mouse.x -40,
        top: mouse.y -40,
      }} alt='cat' />
    );
  }
}

export default Cat;
