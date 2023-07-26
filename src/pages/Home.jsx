import React, { useState, useRef, useCallback, useEffect } from "react";
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
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const [colors, setColors] = useState("#03045e, #023e8a, #0077b6, #00b4d8");
  const [colorArray, setColorArray] = useState([
    "#03045e",
    "#023e8a",
    "#0077b6",
    "#00b4d8",
    "#ade8f4",
  ]);

  const [section, setSection] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSection = (data, scroll) => {
    setSection(scroll);
    handleScroll(data);
    console.log(section);
  };

  const handleIndex = (index) => {
    setIndex(index);
  };

  const handleScroll = useCallback(
    (data) => {
      console.log(data);
      console.log(section);
      if (section !== null) {
        const element = section.current;
        console.log(element);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    },
    [section]
  );

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <>
      <Container colors={colors}>
        <Navbar
          section={section}
          setSection={setSection}
          colorArray={colorArray}
          handleScroll={handleScroll}
          aboutRef={aboutRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          handleSection={handleSection}
          handleIndex={handleIndex}
          index={index}
        />
        <Introduction colorArray={colorArray} />
        <About
          ref={aboutRef}
          colorArray={colorArray}
          handleIndex={handleIndex}
        />
        <Education
          ref={educationRef}
          colorArray={colorArray}
          handleIndex={handleIndex}
          index={index}
        />
        <Projects
          ref={projectsRef}
          colorArray={colorArray}
          handleIndex={handleIndex}
        />
        <Skills
          ref={skillsRef}
          colorArray={colorArray}
          handleIndex={handleIndex}
        />
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
