import React from "react";
import styled from "styled-components";
import Title from "../../components/layout/Title";
import WhiteBox from "../../components/layout/WhiteBox";
import Description from "../../components/layout/Description";
import TextAndButton from "../../components/result/TextAndButton";
import homeButton from "../../../public/images/home.png";
import Footer from "../../components/layout/Footer";

import React from "react";

const HostStatisticsPage = () => {
  return (
    <div>
      <Title text={"질문별 통계"} />
      <WhiteBox>
        <div></div>
      </WhiteBox>
    </div>
  );
};

export default HostStatisticsPage;

const StatisticContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5rem;
  align-self: stretch;
`;
