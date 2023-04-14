import React from 'react';
import "./flat.css"

const Flat = ({ flat }) => {
  const style = {
    backgroundImage: `url('${flat.imageUrl}')`,
    backgroundSize: 'cover', // Add this line to cover the div with the image
    backgroundPosition: 'center', // Add this line to position the image at the center
    // height: '400px', // Add this line to set the height of the div
  };
  return (
    <div className="flat">
      <div className="flat-picture" style={style}></div>
      <div className ="flat-title">
        <h2>{flat.name}</h2>
        <p>Price: {flat.price} {flat.priceCurrency}</p>
        <p>Latitude: {flat.lat}</p>
        <p>Longitude: {flat.lng}</p>
      </div>
    </div>
  );
}

export default Flat;


// class Flat  extends React.Component {
//   render() {
//    const title = this.props.flat.price
//    + this.props.flat.priceCurrency
//    + " - "  + this.props.flat.name;


//    const style ={
//     backgroundImage: `url('${this.props.imageUrl}')`
//    }
//     return
//     <div className="flat">
//       <div className="flat-picture" style={style}></div>
//       <div className="flat-title">
//         {title}
//       </div>
//     </div>
//   }
// }

// export default Flat ;
