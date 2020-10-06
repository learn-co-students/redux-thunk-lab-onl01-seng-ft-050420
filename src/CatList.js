// write your CatList component here
import React from 'react'
import { Component } from "react";

export default class CatList extends Component {
    displayCats = () => {
        return this.props.catPics.map( catImage => {
            return <img src={catImage.url}></img>
        })
        
    }

    render() {
        return(
            <div>
                {this.displayCats()}
            </div>
        )
    }
} 