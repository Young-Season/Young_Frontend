import React from "react";
import styled from "styled-components";
import Title from "../../components/layout/Title";
import WhiteBox from "../../components/layout/WhiteBox";
import Description from "../../components/layout/Description";
import TextAndButton from "../../components/result/TextAndButton";
import homeButton from "../../../public/images/home.png";
import Footer from "../../components/layout/Footer";

import React from "react";

const HostIndividualResultPage = ({ guestName, hostName }) => {
  return (
    <div>
      <Title text={`${guestName}이 생각하는 ${hostName}은?`} />
      <WhiteBox>
        <AnswerContainer>
          <div></div>
        </AnswerContainer>
      </WhiteBox>
    </div>
  );
};

export default HostIndividualResultPage;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;
