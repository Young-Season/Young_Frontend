import React from "react";
import styled from "styled-components";
const instagramUrl = process.env.PUBLIC_URL + "/images/instagram.png";
const Footer = () => {
  const gotoInstagram = () => {
    window.open("https://www.instagram.com/young.season79");
  };
  return (
    <FooterContainer>
      <TextContainer>
        <Text>
          Made by.
          <br />
          중앙대학교 멋쟁이사자처럼 11기 영춘기
        </Text>
      </TextContainer>
      <Image
        src={instagramUrl}
        alt="Instagram @young.season79"
        onClick={gotoInstagram}
      ></Image>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.625rem;
  height: 7.5rem;
  width: 100%;
  background-color: #64422e;
  color: white;
  padding: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
  margin-left: 1.25rem;
`;

const Text = styled.div`
  color: #fffdfd;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.125rem */
`;

const Image = styled.img`
  height: 34px;
  width: 34px;
  margin-right: 15px;
  margin-top: 2rem;
  cursor: pointer;
`;
