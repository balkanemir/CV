import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 0%;
  }
  75% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  background: radial-gradient(${(props) => props.colors});
  background-size: 200% 200%;
  animation: ${gradientAnimation} 30s linear infinite;
  height: auto;
  transition: all 0.2s;
`;

const Home = () => {
  const [colors, setColors] = useState("#03045e, #023e8a, #0077b6, #00b4d8");
  const [colorArray, setColorArray] = useState([
    "#03045e",
    "#023e8a",
    "#0077b6",
    "#00b4d8",
    "#ade8f4",
  ]);
  return (
    <>
      <Container colors={colors}>
        <Navbar colorArray={colorArray} />
        <Introduction colorArray={colorArray} />
        <About colorArray={colorArray} />
        <Education colorArray={colorArray} />
        <Projects colorArray={colorArray} />
        <Skills colorArray={colorArray} />
        <Footer
          setColors={setColors}
          setColorArray={setColorArray}
          colorArray={colorArray}
        />
      </Container>
    </>
  );
};

export default Home;
