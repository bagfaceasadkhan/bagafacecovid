import React from "react";
import styled from "styled-components";

const Card6 = () => {
  return (
    <Container>
      <h2>Top Safety Precautions</h2>

      <h4 style={{ color: "#8796f3" }}>
        Wash your hands for twenty seconds with soap and water frequently. Use
        your elbow to cough or sneeze into or use a tissue and immediately throw
        it in a covered dustbin. Stay calm: While it is natural to feel anxious
        and scared, being educated about your situation is a great way to combat
        anxiety.
      </h4>

      <h4>Keep safetey at all costs.</h4>
    </Container>
  );
};

export default Card6;
const Container = styled.div`
  grid-area: card6;

  padding: 15px;
  border: 1px solid #abb3c8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
