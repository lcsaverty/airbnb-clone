import React from 'react';
import './App.css';
import Flat from './components/flat';

const flat = {
  "id": 145,
  "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
  "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  "price": 164,
  "priceCurrency": "EUR",
  "lat": 48.884211,
  "lng": 2.346890
};

function App() {
  return (
    <div>
      <Flat flat={flat}/>
    </div>
  );
}

export default App;
