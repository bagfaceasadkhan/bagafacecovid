import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { updateAllCountry } from "../features/searchSlice";
import { useDispatch } from "react-redux";
const Card3 = () => {
  const [countries, setCountries] = useState("");
  const dispatch = useDispatch();
  const getCountries = async () => {
    const resp = await fetch("https://disease.sh/v3/covid-19/countries/");
    const data = await resp.json();
    setCountries(data);

    dispatch(updateAllCountry(data));
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <Container>
      {countries && (
        <div className="wrapper">
          <h2>Cases by country</h2>
          <div className="listcontainer">
            {countries.map((val, index) => {
              return (
                <div
                  className="list"
                  style={{ backgroundColor: index % 2 == 0 ? "#b4c1ffc3" : "" }}
                >
                  <h5>{val.country}</h5> <h6>{val.cases}</h6>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card3;
const Container = styled.div`
  grid-area: card3;
  padding: 15px;
  border: 1px solid #abb3c8;
  border-radius: 10px;
  overflow: scroll;
  .wrapper {
    height: 100%;

    overflow: scroll;
    .listcontainer {
      margin-top: 12px;
      .list {
        margin-top: 2px;
        margin-bottom: 2px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
