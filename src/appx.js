import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Flat from './components/flat';

const App = () => {
  const [flats, setFlats] = useState([]);
  const [allFlats, setAllFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [search, setSearch] = useState('');

  const [tileLayer, setTileLayer] = useState({
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  });

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json',
    )
      .then((response) => response.json())
      .then((data) => {
        setAllFlats(data);
        setFlats(data);
        setSelectedFlat(data[0]);
      });
  }, []);

  const center = {
    lat: 48.856614,
    lng: 2.3522219,
  };


  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flats">
          {flats.map((flat) => {
            return <Flat key={flat.id} flat={flat} />;
          })}
        </div>
      </div>
      <div className="map">
        <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url={tileLayer.url} attribution={tileLayer.attribution} />
          {flats.map((flat, index) => (
            <Marker key={index} position={[flat.lat, flat.lng]}>
              <Popup>
                {/* {flat.name}, {flat.price} € */}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
