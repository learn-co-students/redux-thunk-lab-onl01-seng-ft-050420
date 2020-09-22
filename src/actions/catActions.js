//make a function, send a dispatch, dispatch the returned data

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
    return response.json()
     }) .then(responseJSON => {
    //call dispatch and send the cat JSON data to your store
        dispatch({type: 'ADD_CATS', cats: responseJSON.images}) 
    })
  }
}

// we need the data inside images so we pass that directly when
//calling the second dispatch



// write and export your action creator function here

//we are defining our action creator function called fetchCats()

//we are going to return a function that takes in dispatch()


//console.log(responseJSON.images)