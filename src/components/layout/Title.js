import React from 'react';

function Title(props) {

  return (
    <Text>{props}</Text>
  );
}

export default Title;

const Wrapper = styled.div`

width: 222px;

font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;

color: #64422E;

`;

