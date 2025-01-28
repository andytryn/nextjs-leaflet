import type { FeatureCollection, Point } from 'geojson';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet';

interface MyGeoJsonProperties {
  name: string;
  address: string;
  openingHours: string;
}

const MapsGeoJSON = () => {
  const icon = L.icon({ iconUrl: '/images/marker-icon.png' });
  const dataGeoJSON: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [1.314000, 103.844250],
        },
        properties: {
          name: 'My Marker',
          address:
            'Singapura',
          openingHours: '7am - 9pm',
        },
      },
    ],
  };
  // Extract  coordinates for Leaflet
  const [latitude, longitude] = dataGeoJSON.features[0].geometry.coordinates;
  const leafletCoordinates: LatLngExpression = [latitude, longitude];
  const { name, address, openingHours } = dataGeoJSON.features[0]
    .properties as MyGeoJsonProperties;
  return (
    <MapContainer
      style={{ height: '500px', width: '100%' }}
      zoom={15}
      scrollWheelZoom={true}
      center={leafletCoordinates}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={leafletCoordinates} icon={icon}>
        <Popup>
          {name}<br />
          {address}<br />
          {openingHours}
        </Popup>
      </Marker>
      <GeoJSON data={dataGeoJSON} />
    </MapContainer>
  );
};

export default MapsGeoJSON;
