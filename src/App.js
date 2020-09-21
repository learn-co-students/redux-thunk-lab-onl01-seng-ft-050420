import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions.js'
import CatList from './CatList.js'

class App extends Component {
  
  componentDidMount() {
    // debugger;
    console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    // debugger;
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} loading={this.props.loading}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

