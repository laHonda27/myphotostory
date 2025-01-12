import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const icon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const position: [number, number] = [48.8584, 2.2945];

export default function Map() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="font-playfair text-2xl mb-6">Localisation</h2>
      {/* Ajout d'un conteneur avec isolation du contexte d'empilement */}
      <div className="relative isolate h-[400px] rounded-lg overflow-hidden">
        <MapContainer 
          center={position} 
          zoom={13} 
          className="h-full w-full z-0"
          zoomControl={true}
          // Ajustement des options de contrôle de zoom
          zoomControlOptions={{
            position: 'bottomright'
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={icon}>
            <Popup>
              L'Œil du Moment<br />
              123 rue Example, 75000 Paris
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}