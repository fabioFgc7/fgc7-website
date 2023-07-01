import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./contact.scss";
export const Map = () => {
  return (
    <article className=''>
      <div className='info-map'>
        Fabio Guillen,
        <br />
        Paraguay,
        <br />
        Amambay: <br />
        Pedro Juan Caballero <br />
        <span>fguillencristaldo@gmail.com</span>
      </div>
      <div className='map-wrap'>
        <MapContainer
          center={[-22.537625, -55.73709]}
          zoom={2}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[-22.537625, -55.73709]}>
            <Popup>Fabio lives here,come over for a cup of coffee </Popup>
          </Marker>
        </MapContainer>
      </div>
    </article>
  );
};
