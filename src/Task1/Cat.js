import React, { Component } from "react";

import normalCatsvg from './cat.svg';
import bengalCatsvg from './bengal-cat.svg';
import siberianCatsvg from './siberian-cat.svg';

const cats = [normalCatsvg, bengalCatsvg, siberianCatsvg];
const randomCat = cats[Math.floor(Math.random() * cats.length)];
let r = Math.random() * 2.5;      //дробь

class Cat extends Component {

  createCat = (mouse) => {
    return(
      <img title="Хочу жрать!" className="stalkingKitty" src={randomCat} style={{
        position: 'absolute',
        left: mouse.x,
        top: mouse.y,
        transition: `all ${r}s ease-out`,
      }} alt='cat' />
    )
  }

  render() {
    return (
      <div style={{height: '850px'}} onMouseMove={this.props.handleMouseMove}>
        {this.createCat(this.props.mouse)}
      </div>
    );
  }

}

export default Cat;
