import React from "react";
import styled from "styled-components";
import SquareIcon from "@mui/icons-material/Square";
import SearchIcon from "@mui/icons-material/Search";
import { updateSearch } from "../features/searchSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Card2 = () => {
  const [search, setSearch] = useState("");
  const [countryData, setCountryData] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const fetchCountryData = async () => {
    try {
      const resp = await fetch(
        `https://disease.sh/v3/covid-19/countries/${
          search.toLowerCase() || "india"
        }`
      );
      const data = await resp.json();

      if (data.message == "Country not found or doesn't have any cases") {
        throw "country not found try again!";
      } else {
        setCountryData(data);
        dispatch(updateSearch(data));
        setError(false);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <Container>
      {countryData && (
        <div className="wrapper">
          <h2>
            Conronavirus Cases - <h4>&nbsp;{countryData.country}</h4>
          </h2>
          {error && (
            <h4 style={{ color: "red" }}> Please enter a valid country!</h4>
          )}
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              onClick={() => {
                fetchCountryData();
                setSearch("");
              }}
            >
              <SearchIcon />
            </button>
          </div>
          <div className="cases-info">
            <div className="title">
              <h4>CONFIRMED</h4>
              <h4 style={{ justifySelf: "end" }}>RECOVERED</h4>
              <h4 style={{ justifySelf: "end" }}>DEATHS</h4>
            </div>
            <div className="data">
              <h2 style={{ color: "#35496a" }}>
                {countryData.cases.toLocaleString()}
              </h2>

              <h2 style={{ color: "#36DB99", justifySelf: "end" }}>
                {countryData.recovered.toLocaleString()}
              </h2>

              <h2 style={{ color: "#EF8379", justifySelf: "end" }}>
                {countryData.deaths.toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="conditions">
            <div className="mild">
              <SquareIcon style={{ fill: "#9A88FE" }} />
              <h4>TodayCases </h4>
              <h4>{countryData.todayCases}</h4>
            </div>
            <div className="critical">
              <SquareIcon style={{ fill: "#F5CA3D" }} />
              <h4>Critical </h4>
              <h4>{countryData.critical.toLocaleString()}</h4>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card2;
const Container = styled.div`
  grid-area: card2;
  padding: 15px;
  border: 1px solid #abb3c8;
  border-radius: 10px;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    h2 {
      display: flex;
      align-items: center;
    }
    .search {
      display: flex;
      align-items: center;
      input[type="text"] {
        width: 40%;
        height: 3vh;
        background-color: #c6d0ff;
        outline: none;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 5px;
      }
      button {
        height: 3vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        padding: 5px;
        background-color: #c6d0ff;
        color: white;

        border-radius: 5px;
        border: 1px solid #c6d0ff;
      }
    }
    .conditions {
      border: 1px solid #abb3c8;
      border-radius: 10px;
      padding: 15px;
      .mild,
      .critical {
        display: grid;

        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .cases-info {
      .title {
        display: grid;

        grid-template-columns: 1fr 1fr 1fr;
      }
      .data {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .wrapper {
      .search {
        input[type="text"] {
          width: 70%;
          height: 25px;
        }
        button {
          width: 20%;
          height: 25px;
        }
      }
    }
  }
`;
