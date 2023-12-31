import React from "react";
import styled from "styled-components";

function Description(props1, props2) {
  return (
    <Container>
      <Text1>{props1}</Text1>
      <Text2>{props2}</Text2>
    </Container>
  );
}

export default Description;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 12px;
  gap: 24px;

  width: 320px;
  height: 203px;
`;
const Text1 = styled.div`
  width: 296px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 200%;
  /* identical to box height, or 32px */
  text-align: center;

  color: #000000;
`;

const Text2 = styled.div`
  width: 296px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */
  text-align: center;
  color: #555555;
`;
