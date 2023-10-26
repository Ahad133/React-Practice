import React from 'react';
import { useGeolocated } from 'react-geolocated';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function LocationMap() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = useGeolocated();

  if (!isGeolocationAvailable) {
    return <div>Geolocation is not available on your device.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled on your device.</div>;
  }

  if (!coords) {
    return <div>Loading location data...</div>;
  }

  const { latitude, longitude } = coords;
  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div>
      <div style={{ width: '650px', height: '450px' }}>
      <MapContainer center={[latitude, longitude]} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  );
}

export default LocationMap;
