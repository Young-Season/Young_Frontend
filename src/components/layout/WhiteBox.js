import React from "react";
import styled from "styled-components";

const WhiteBox = () => {
  return (
    <WhiteContainer>
      <div></div>
    </WhiteContainer>
  );
};

export default WhiteBox;

const WhiteContainer = styled.div`
  display: flex;
  width: 20rem;
  padding: 1.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.75rem;
  background: #fff;
`;
