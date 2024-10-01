import React, {useEffect, useRef} from "react";
import type {Place} from "../api/Place.ts";
import 'leaflet/dist/leaflet.css'
import type {Map as LeafletMap} from 'leaflet';
import {MapContainer, Marker, TileLayer} from "react-leaflet";


interface MapProps{
    place : Place | null;
}
const Map: React.FC = ({place} : MapProps) => {

    const mapRef = useRef<LeafletMap | null >(null);
    useEffect(() => {
        if (mapRef.current && place){
            mapRef.current?.flyTo([place.latitude, place.longitude]);
        }
    }, [place])
    return (
      <MapContainer
      ref={mapRef}
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
      >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {place && <Marker
            position={[place.latitude, place.longitude]}
          />}
      </MapContainer>
    );
}

export default Map;

