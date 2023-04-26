import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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

  const center = {
    lat: 48.856614,
    lng: 2.3522219,
  };

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchQuery = e.target.value.toLowerCase();
    const filteredFlats = allFlats.filter((flat) =>
      flat.name.toLowerCase().includes(searchQuery)
    );
    setFlats(filteredFlats);
  };

  const PanToMarker = () => {
    const map = useMap();
    useEffect(() => {
      if (selectedFlat) {
        map.panTo([selectedFlat.lat, selectedFlat.lng]);
      }
    }, [selectedFlat, map]);
    return null;
  };

  const handleFlatClick = (flat) => {
    setSelectedFlat(flat);
  };

  // const popupRefs = useRef([]);

  // const setPopupRef = (index, ref) => {
  //   popupRefs.current[index] = ref;
  // };

  // useEffect(() => {
  //   if (selectedFlat) {
  //     const index = flats.findIndex((flat) => flat.id === selectedFlat.id);
  //     if (popupRefs.current[index]) {
  //       popupRefs.current[index].leafletElement.openPopup();
  //     }
  //   }
  // }, [selectedFlat, flats]);

  // in this updated code, the map will pan to the corresponding marker when you click on a flat and should open the popup of the selected marker, but currently doesn't work :/

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="flats">
          {flats.map((flat) => {
            return <Flat key={flat.id} flat={flat} onFlatClick={handleFlatClick} />;
          })}
        </div>
      </div>
      <div className="map">
        <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url={tileLayer.url} attribution={tileLayer.attribution} />
          {flats.map((flat, index) => (
            <Marker key={index} position={[flat.lat, flat.lng]}>
              <Popup >
                {flat.price} €
              </Popup>
            </Marker>
          ))}
          <PanToMarker />
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
