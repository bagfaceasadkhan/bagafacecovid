import React from "react";
import styled from "styled-components";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
const Navbar = () => {
  return (
    <Container>
      <a href="">
        <CoronavirusIcon style={{ fill: "#35496A" }} />
      </a>

      <a href="https://github.com/bagfaceasadkhan" target={"_blank"}>
        {" "}
        <GitHubIcon style={{ fill: "#35496A" }} />
      </a>
      <a
        href="https://bagfaceasadkhan.github.io/selfportfolio/"
        target={"_blank"}
      >
        {" "}
        <LanguageIcon style={{ fill: "#35496A" }} />
      </a>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  grid-area: nav;
  padding: 15px;
  border: 1px solid #c6d0ff;
  border-radius: 10px;
  background-color: #c6d0ff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .bottom {
      display: flex;
      align-items: center;
    }
    .top {
      display: flex;
      align-items: center;
    }
  }
`;
