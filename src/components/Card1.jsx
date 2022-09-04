import React from "react";
import styled from "styled-components";
import SquareIcon from "@mui/icons-material/Square";
import { useState, useEffect } from "react";

const Card1 = () => {
  const [worldWide, setWorldWide] = useState("");

  useEffect(() => {
    const fetchAllCountryData = async () => {
      const resp = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await resp.json();

      setWorldWide(data);
    };
    fetchAllCountryData();
  }, []);

  const widthActive =
    (worldWide.active * 500) /
      (worldWide.active + worldWide.recovered + worldWide.deaths) +
    "%";
  const widthRecovered =
    (worldWide.recovered * 100) /
      (worldWide.active + worldWide.recovered + worldWide.deaths) +
    "%";
  const widthDeaths =
    (worldWide.deaths * 500) /
      (worldWide.active + worldWide.recovered + worldWide.deaths) +
    "%";

  return (
    <Container>
      {worldWide && (
        <div className="wrapper">
          <h2>
            Coronavirus Cases - <h4>&nbsp; Worldwide</h4>
          </h2>
          <h4>TOTAL CONFIRMED CASES</h4>
          <h1>{worldWide.cases.toLocaleString()}</h1>
          <div
            className="barcontainer"
            style={{
              display: "flex",
              width: "100%",
              height: "15px",
            }}
          >
            <div
              className="activebar"
              style={{
                backgroundColor: "#9C89FF",
                width: widthActive,
              }}
            ></div>
            <div
              className="recoveredbar"
              style={{
                backgroundColor: "#31DC96",
                width: widthRecovered,
              }}
            ></div>
            <div
              className="deathbar"
              style={{
                backgroundColor: "#F2837C",
                width: widthDeaths,
              }}
            ></div>
          </div>
          <div className="info-container">
            <div className="active cases">
              <div className="icon-container">
                <SquareIcon style={{ fill: "#9C89FF" }} />
                <h5>Active Cases</h5>
              </div>
              <div className="num-container">
                <h6>{worldWide.active.toLocaleString()}</h6>
              </div>
            </div>
            <div className="recovered cases">
              <div className="icon-container">
                <SquareIcon style={{ fill: "#31DC96" }} />
                <h5>Recovered Cases</h5>
              </div>
              <div className="num-container">
                <h6>{worldWide.recovered.toLocaleString()}</h6>
              </div>
            </div>
            <div className="death cases">
              <div className="icon-container">
                <SquareIcon style={{ fill: "#F2837C" }} />
                <h5>Death Cases</h5>
              </div>
              <div className="num-container">
                <h6>{worldWide.deaths.toLocaleString()}</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card1;
const Container = styled.div`
  grid-area: card1;
  padding: 15px;
  border: 1px solid #abb3c8;
  border-radius: 10px;

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    h2 {
      display: flex;
      align-items: center;
    }
    .info-container {
      .cases {
        display: flex;
        justify-content: space-between;
        .icon-container {
          display: flex;
          align-items: center;
          h5 {
            margin-left: 3px;
          }
        }
      }
    }
  }
`;
