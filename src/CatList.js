import React, { Component } from 'react';

export default class CatList extends Component {
    render () {
        console.log(this.props.catPics)
        return (
            <div>
            {this.props.catPics.map(pic=> <img alt={pic.id} src={pic.url}/>)}
            </div>
        )
    }
}