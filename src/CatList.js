import React from 'react';

function CatList(props) {
  const listCats = () => {
    return props.catPics.map((cat) => (
      <img key={cat.id} src={cat.url} alt={cat.id} />
    ));
  };

  return <div>{listCats()}</div>;
}

export default CatList;
