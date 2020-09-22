// write your CatList component here

import React from 'react';

const CatList = (catPics) => {
    debugger
    const cats = catPics.map((cat) => {
        return <img>{cat.catPics}</img>
    })
   return<div>{cats}</div>
}

export default CatList;