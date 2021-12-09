import React from "react";
import styled from "styled-components";
import Card from "../components/molecules/Card/Card";

const MainTemplateWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://cdn.pixabay.com/photo/2021/10/19/11/55/city-6723388_960_720.jpg');
  background-size: cover;
  background-position: center;
  object-fit: cover;
`;

const MainTemplate = () => (
  <MainTemplateWrapper>
    <Card/>
  </MainTemplateWrapper>
);

export default MainTemplate;