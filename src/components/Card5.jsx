import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
const Card5 = () => {
  const [countries, setCountries] = useState("");

  const getCountries = async () => {
    const resp = await fetch("https://disease.sh/v3/covid-19/countries/");
    const data = await resp.json();
    setCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);

  const dataToSort = countries;
  if (dataToSort) {
    dataToSort.sort((a, b) => {
      if (a.cases > b.cases) return -1;
      return 1;
    });
  }
  return (
    <Container>
      {dataToSort && (
        <div className="wrapper">
          <h2>Most Affected Countries</h2>
          <div className="header">
            <h4>Country</h4>
            <h4 style={{ justifySelf: "center" }}>Confirmed</h4>
            <h4 style={{ justifySelf: "end" }}>Deaths</h4>
          </div>
          <div className="informations">
            {dataToSort.map((val) => {
              return (
                <div className="main">
                  <div className="info">
                    <h5>
                      <img src={val.countryInfo.flag} alt="" /> {val.country}
                    </h5>
                    <h6 style={{ justifySelf: "center" }}>
                      {val.cases.toLocaleString()}
                    </h6>
                    <h6 style={{ justifySelf: "end" }}>
                      {val.deaths.toLocaleString()}
                    </h6>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card5;
const Container = styled.div`
  grid-area: card5;
  padding: 15px;
  border: 1px solid #abb3c8;
  border-radius: 10px;
  height: 100%;

  overflow: scroll;
  .wrapper {
    height: 70%;

    .informations {
      .main {
        .info {
          margin-top: 15px;
          margin-bottom: 5px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          h5 {
            img {
              margin-right: 5px;
              height: 15px;
              width: 20px;
            }
          }
        }
        hr {
          border-color: #abb3c8a9;
          width: 100%;
          border-top-width: 1px;
          border-right-width: 0px;
          border-bottom-width: 0px;
          border-left-width: 0px;
        }
      }
    }
    .header {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
