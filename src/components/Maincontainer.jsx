import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Map from "./Map";
import { useState, useEffect } from "react";
const Maincontainer = () => {
  return (
    <Container>
      <Navbar />
      <Card1 />
      <Card2 />
      <Card3 />

      <Card5 />
      <Card6 />
      <Map />
    </Container>
  );
};

export default Maincontainer;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "nav card1 card1 map map map map"
    "nav card2 card2 map map map map"
    "nav card3 card3 card5 card5 card6 card6";
  //mediaqueries starts here
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.1fr 0.7fr 0.7fr 0.7fr;
    grid-template-areas:
      "nav nav"
      "card1 card2"
      "card3 map"
      "card5 card6";
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 35px 250px 250px 250px 250px 300px 250px 250px;
    grid-template-areas:
      "nav"
      "card1"
      "card2"
      "card3"
      "card4"
      "map"
      "card5"
      "card6";
  }
`;
