import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          allFlats: data,
          flats: data,
          selectedFlat: data[0]
        })
      })
  };


  render() {
    let center = {
      lat: 44.8404400, lng: -0.5805000
    };
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search..." ></input>
          </div>
          <div className="flats">
            { this.state.flats.map((flat) => {
                  return <Flat flat={flat} />
                })}
          </div>
        </div>
        <div className="map">
        <MapContainer center={center} zoom={14} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.flats.map((flat, index) => (
            <Marker key={index} position={[flat.lat, flat.lng]}>
              <Popup>{flat.price} €</Popup>
            </Marker>
          ))}
        </MapContainer>

        </div>
      </div>
    );
  }
}

export default App;
