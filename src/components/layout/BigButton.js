import React from "react";
import styled from "styled-components";

const BigButton = ({ textBox }) => {
  // example : <BigButton textBox={<Text>HI</Text>}></BigButton>
  return <BigButtonContainer>{textBox}</BigButtonContainer>;
};

export default BigButton;

const BigButtonContainer = styled.div`
  display: flex;
  width: 17.5rem;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 20px;
  border: 1px solid var(--Brown, #64422e);
  background: var(--White, #fafafa);
  box-shadow: -1px -2px 7.3px 0px rgba(0, 0, 0, 0.25) inset;
`;
