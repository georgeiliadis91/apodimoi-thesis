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
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "react-leaflet-markercluster/styles";
const UserMap = ({ userData }) => {
  return (
    <MapContainer
      className="z-0 mb-12 h-[500px] w-full"
      center={[45, 23]}
      zoom={3}
      maxZoom={18}
      minZoom={2}
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
