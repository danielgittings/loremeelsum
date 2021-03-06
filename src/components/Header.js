import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
  text-align: center;
  padding: 80px 20px 100px;
  background-color: #e26a21;

  @media all and (min-width: 500px) {
    padding: 80px 20px 100px;
  }

  > div {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 40px;
  font-family: 'Satisfy';
  font-weight: 400;
  text-shadow: 8px 8px 3px rgba(0, 0, 0, 0.1);
  color: #fbfbff;

  @media all and (min-width: 400px) {
    font-size: 70px;
  }

  @media all and (min-width: 575px) {
    font-size: 85px;
  }

  @media all and (min-width: 760px) {
    font-size: 100px;
  }
`;

const Header = () => (
  <MainHeader>
    <div>
      <Title>Lorem Eelsum</Title>
    </div>
  </MainHeader>
);

export default Header;
