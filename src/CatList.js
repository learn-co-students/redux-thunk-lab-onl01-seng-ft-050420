import React from 'react'

export default class CatList extends React.Component {

    renderCats(){
        // debugger;
        return this.props.catPics.map( cat => {
            return <img src={cat.url}/>
        })
    }

    render(){
        if (this.props.loading) {
            return <div>LOADING ... </div>
        } 
        return <div>{this.renderCats()}</div>
    }
}