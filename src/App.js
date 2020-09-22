import React, { Component } from 'react';//1
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
   import CatList  from './CatList'

class App extends Component {   
  
componentDidMount(){
  console.log(this.props)
  this.props.fetchCats()
}

  render() {
    //debugger
    console.log(this.props.catPics)
    //empty array for all the catPics in state for right now initially
    return (
      <div className = "App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}
//3
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

//this function below will make fetchCats() available
//fetchCats() is an action
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)//2

