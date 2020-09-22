// add the catsReducer

 
const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }
      case 'ADD_CATS':
        return {
          ...state,
          cats: action.cats,
          //expecting to add a payload object with a cats key, will add a 
          //cat to the list
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default catsReducer;