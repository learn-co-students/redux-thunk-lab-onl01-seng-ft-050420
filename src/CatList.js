import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h2>CatList</h2>
        <ul>
          {this.props.catPics.map((cat, index) => <li key={index}><img src={cat.url} alt="A cute cat!"></img></li>)}
        </ul>
      </div>
    );
  }
}