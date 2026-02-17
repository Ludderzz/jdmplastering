import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Re-add your Icon Fix logic here...
const ServiceMap = ({ center, boundary }) => (
  <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
    <Polygon positions={boundary} pathOptions={{ fillColor: '#f59e0b', color: '#d97706', weight: 3, fillOpacity: 0.2 }} />
    <Marker position={[51.4291, -2.7628]}><Popup><strong>JDM Plastering HQ - Nailsea</strong></Popup></Marker>
  </MapContainer>
);
export default ServiceMap;