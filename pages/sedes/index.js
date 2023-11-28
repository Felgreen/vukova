"use client";
import React, { useState } from "react";
import MapCards from "../../components/MapCards";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const Sucursales = () => {
  const [latitud, setLatitud] = useState(-34.5009563);
  const [longitud, setLongitud] = useState(-58.5177817);
  const [zoom, setZoom] = useState(13);

  const mapStyles = {
    width: "49.55%",
    height: "77.5%",
    display: "none",
    zIndex: "-1"
  };

  return (
    <section
      id="sucursales"
      className="flex-col flexCenter overflow-hidden py-24 w-screen"
    >
      <div className="hidden sm:flex flex-1 sm:flex-row foverflow-hidden p-4 px-5 z-0">
        <Map
          google={window.google}
          zoom={zoom}
          style={mapStyles}
          z-index="-1"
          initialCenter={{
            lat: latitud,
            lng: longitud,
          }}
        >
          <Marker
            position={{
              lat: -34.4818844,
              lng: -58.503765,
            }}
          />
          <Marker
            position={{
              lat: -34.4581757,
              lng: -58.5139465,
            }}
          />
          <Marker
            position={{
              lat: -34.5331572,
              lng: -58.481126,
            }}
          />
        </Map>
      </div>
      <MapCards map={Map}/>
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCYK1Pk_ihOJef-UsNeCml62tyQHF-msfU",
})(Sucursales);