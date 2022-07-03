import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  CircleMarker,
} from "react-leaflet";
import countrylatLongData from "../../json-data-files/countriesWithLat.json";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "react-leaflet-markercluster/dist/styles.min.css";
const UserMap = ({ userData }) => {
  return (
    <MapContainer
      className="markercluster-map"
      center={[45, 23]}
      zoom={3}
      maxZoom={18}
      minZoom={2}
      style={{ height: 500, width: "100%", marginBottom: "46px", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        {Object.entries(userData).map(([key, val]) => {
          const lat = countrylatLongData[key].latitude;
          const lng = countrylatLongData[key].longitude;

          return (
            <Marker position={[lat, lng]} key={`${lng}${lat}`}>
              <Popup>{`${val} people in ${key}`}</Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default UserMap;
