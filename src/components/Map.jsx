import React from "react";
import styled from "styled-components";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
const Map = () => {
  const searchData = useSelector((state) => state.search.value);
  const allCountryData = useSelector((state) => state.search.allCountry);

  const lat = searchData.payload?.countryInfo?.lat || 20;
  const long = searchData.payload?.countryInfo?.long || 77;

  const zoom = searchData.payload?.country.toLowerCase() == "india" ? 4 : 6;

  const posArr = [lat, long];
  function ChangeView() {
    const map = useMap();
    map.setView(posArr, zoom, {
      Animation: true,
      AnimationTimeline: 500,
    });
  }
  const displayMap = (
    <MapContainer center={posArr} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {allCountryData &&
        allCountryData.payload.map((val) => {
          return (
            <Marker position={[val.countryInfo.lat, val.countryInfo.long]}>
              <Popup>
                Country : {val?.country || "Loading data"} <br />
                Active Cases : {val?.active || "Loading data"} <br />
                Total Cases : {val?.cases || "Loading data"}
              </Popup>
            </Marker>
          );
        })}
      <ChangeView />
    </MapContainer>
  );

  return <Container>{displayMap}</Container>;
};

export default Map;

const Container = styled.div`
  grid-area: map;
  padding: 15px;
  border: 1px solid #abb3c8;
  border-radius: 10px;
  .leaflet-container {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
