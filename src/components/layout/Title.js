import React from "react";
import styled from "styled-components";

function Title(props) {
  return <Text>{props}</Text>;
}

export default Title;

const Wrapper = styled.div`
  width: 222px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #64422e;
`;

const Text = styled.div`
  color: #64422e;
  font-family: Spoqa Han Sans Neo;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
