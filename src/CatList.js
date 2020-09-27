// write your CatList component here

import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
        return(
            <div>
                <h2>CatList</h2>
                <ul>
                    {this.props.catPics.map((cat, index) => <li key={index}>
                        <img src={cat.url} alt="this is an img alt"/>
                    </li>)}
                </ul>
            </div>
        )
    }
}