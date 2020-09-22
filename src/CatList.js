// write your CatList component here

import React from 'react';

const CatList = (props) => {
    console.log(props)
    //we have to access the catpics property in props
    const cats = props.catPics.map((cat) => {
        return <img src={cat.url} key={cat.id}></img>
    })
   return<div>{cats}</div>
}

export default CatList;