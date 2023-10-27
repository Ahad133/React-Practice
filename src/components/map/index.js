import React, { useState, useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';

function LocationMap() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = useGeolocated();
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    if (coords) {
      const { latitude, longitude } = coords;
      const apiKey = 'dddd55e73e8e44aaac4d739edbb8d59c'; 

      axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
        .then(response => {
          const results = response.data.results;
          if (results && results.length > 0) {
            setLocationName(results[0].formatted);
          }
        })
        .catch(error => {
          console.error('Error fetching location name:', error);
        });
    }
  }, [coords]);

  if (!isGeolocationAvailable) {
    return <div>Geolocation is not available on your device.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled on your device.</div>;
  }

  if (!coords || coords.latitude == null || coords.longitude == null) {
    return <div>Loading...</div>;
  }

  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className='coord'>
      <h1>Your Current Location</h1>
      <p>Location: {locationName}</p>

      <div className='opencage' style={{ width: '700px', height: '450px' }}>
        <MapContainer center={[coords.latitude, coords.longitude]} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[coords.latitude, coords.longitude]} icon={customIcon}>
            <Popup>{locationName}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default LocationMap;
