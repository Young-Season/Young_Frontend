import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div>Made by.</div>
      <div>중앙대학교 멋쟁이사자처럼 11기 영춘기</div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  padding: 2rem 0.625rem 2.5rem 1.25rem;
  align-items: flex-start;
  gap: 0.625rem;
  height: 7.5rem;
  width: 100%;
  background-color: #64422e;
  color: white;
`;
