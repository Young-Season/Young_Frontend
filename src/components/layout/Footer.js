import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterStyle></FooterStyle>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 7.5rem;
  width: 100%;
  background-color: #154a39;
  color: white;
  margin-top: 7%;
`;

const FooterStyle = styled.div`
  margin-left: 6%;
  font-family: Pretendard;
  display: flex;
  width: 23.4375rem;
  height: 7.5rem;
  padding: 2rem 0.625rem 2.5rem 1.25rem;
  align-items: flex-start;
  gap: 0.625rem;
`;
