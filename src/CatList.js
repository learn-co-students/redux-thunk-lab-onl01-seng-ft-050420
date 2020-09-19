import React from 'react';

class CatList extends React.Component {

   displayCats() {
       
       return this.props.catPics.map(el =>  <img src={el.url} />)
   }

    render() {
        return(
            <div>
                {this.displayCats()}
            </div>
        )
    }

}

export default CatList
