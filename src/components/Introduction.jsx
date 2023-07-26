import React from "react";
import styled, { keyframes } from "styled-components";

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  z-index: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
`;

const Intro = styled.div`
  font-size: 8rem;
  color: ${(props) => props.color};
  font-family: "Acorn";

  @media (max-width: 950px) {
    font-size: 6rem;
  }
  @media (max-width: 640px) {
    font-size: 5rem;
  }
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const SubIntro = styled.div`
  font-size: 4rem;
  color: ${(props) => props.color};
  font-family: "Acorn";
  @media (max-width: 950px) {
    font-size: 3rem;
  }
  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  text-align: center;
  @media (max-width: 640px) {
    width: 300px;
    line-height: 20px;
  }
  @media (max-width: 500px) {
    width: 250px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  font-family: "Raleway";
  margin-top: 30px;
  color: white;
  @media (max-width: 950px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const Image = styled.img`
  width: 55px;
  height: 50px;
  margin-top: 150px;
  animation: ${SpinAnimation} 3s infinite linear;
`;

const Introduction = ({ colorArray }) => {
  return (
    <>
      <Container>
        <Intro color={colorArray[4]}>Hi. I'm Emir.</Intro>
        <SubIntro color={colorArray[4]}>A Front-end Developer.</SubIntro>
        <DescriptionContainer>
          <Description>
            I am passionate about coding extraordinary designs by using ReactJS.
          </Description>
        </DescriptionContainer>
      </Container>
    </>
  );
};

export default Introduction;
