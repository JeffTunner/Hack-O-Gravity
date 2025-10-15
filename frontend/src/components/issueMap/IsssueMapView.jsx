import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useIssues } from '../../context/IssueContext';

const cityPositions = {
  Delhi: [28.6139, 77.2090],
  Mumbai: [19.0760, 72.8777],
  Chennai: [13.0827, 80.2707],
};

const IssueMapView = ({ filter, streetView }) => {
  const { issues } = useIssues();

  // Map issues to positions (fallback to center if not available)
  const filteredIssues = filter === 'All'
    ? issues
    : issues.filter(issue => issue.category === filter);

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-900">
      <MapContainer
        center={[22.9734, 78.6569]} // Center of India
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: '400px', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url={
            streetView
              ? 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
              : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />
        {filteredIssues.map(issue => (
          <Marker
            key={issue.id}
            position={issue.position || cityPositions[issue.city] || [22.9734, 78.6569]}
          >
            <Popup>
              <div className="text-blue-700 font-bold">{issue.category}</div>
              <div className="text-gray-800">{issue.description}</div>
              <div className="text-xs text-gray-500">Status: {issue.status}</div>
              {issue.city && <div className="text-xs text-gray-500">City: {issue.city}</div>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default IssueMapView;