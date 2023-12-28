import React from "react";
import styled from "styled-components";
import BigButton from "../layout/BigButton";

const TextAndButton = ({ text, buttonText }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <BigButton textBox={textBox}></BigButton>
    </Container>
  );
};

export default TextAndButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const Text = styled.div`
  color: #64422e;

  font-family: Spoqa Han Sans Neo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
