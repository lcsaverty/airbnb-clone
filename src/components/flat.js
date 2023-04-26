import React from 'react';
import "./flat.css"

const Flat = ({ flat, onFlatClick }) => {
  const handleClick = () => {
    onFlatClick(flat);
  };

  const style = {
    backgroundImage: `url('${flat.imageUrl}')`,
    backgroundSize: 'cover', // This line cover the div with the image
    backgroundPosition: 'center', // This line position the image at the center
    // height: '400px', // This line to set the height of the div
  };

  return (
    <div className="flat" onClick={handleClick}>
      <div className="flat-picture" style={style}></div>
      <div className ="flat-title">
        <h2>{flat.name}</h2>
        <p>Price: {flat.price} {flat.priceCurrency}</p>
        <p>Latitude: {flat.lat}</p>
        <p>Longitude: {flat.lng}</p>
      </div>
    </div>
  );
};

export default Flat;
