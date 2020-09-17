import React from "react";

const CatList = (props) => {
  const renderCats = () => {
    console.log(props.catPics);
    return props.catPics.map((x) => (
      <img key={x.id} src={x.url} alt={x.source_url} />
    ));
  };
  return <div>{renderCats()}</div>;
};

export default CatList;
