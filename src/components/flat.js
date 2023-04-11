import React from 'react';
import "./flat.css"

const Flat = ({ flat }) => {
  return (
    <div>
      <h2>{flat.name}</h2>
      <img src={flat.imageUrl} alt={flat.name} />
      <p>Price: {flat.price} {flat.priceCurrency}</p>
      <p>Latitude: {flat.lat}</p>
      <p>Longitude: {flat.lng}</p>
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
//       <div className="flat-title ">
//         {title}
//       </div>
//     </div>
//   }
// }

// export default Flat ;
