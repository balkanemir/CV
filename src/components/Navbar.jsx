import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutMe from "./About";

const Container = styled.div`
  position: fixed;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 50px;
  background-color: ${(props) =>
    props.isScrolled ? "rgba(220, 220, 220, 0.401)" : "tranparent"};
  backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
  transition: all 0.2s;
`;

const Center = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin: 5px;
  color: white;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  font-family: "Raleway";
  @media (max-width: 1125px) {
    width: 80px;
    height: 40px;
    font-size: 12px;
  }
  @media (max-width: 640px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;

const ButtonFocus = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  position: absolute;
  margin: 5px;
  z-index: -1;
  transform: translateX(${(props) => props.index * 110 - 165}px);
  transition: all 0.2s ease-in;
  transition-delay: 0.1s;
  @media (max-width: 1125px) {
    width: 80px;
    height: 40px;
    transform: translateX(${(props) => props.index * 90 - 135}px);
  }
  @media (max-width: 640px) {
    width: 60px;
    height: 30px;
    transform: translateX(${(props) => props.index * 70 - 105}px);
  }
`;

const Navbar = ({ colorArray }) => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [skip, setSkip] = useState(1750);

  const handleIndex = (index) => {
    setIndex(index);
  };

  const handleScroll = (data) => {
    if (data === "ABOUT") {
      window.scrollTo({
        top: window.innerHeight - 80,
        behavior: "smooth",
      });
    }
    if (data === "WELCOME") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (data === "EDUCATION") {
      window.scrollTo({
        top: window.innerHeight * 2 - 80,
        behavior: "smooth",
      });
    }
    if (data === "PROJECTS") {
      window.scrollTo({
        top: window.innerHeight * 4 - 80,
        behavior: "smooth",
      });
    }
    if (data === "SKILLS") {
      window.scrollTo({
        top: window.innerHeight * 5 - 80,
        behavior: "smooth",
      });
    }
  };

  const handleYScroll = () => {
    const scrollTop = window.pageYOffset;
    let threshold = getThresholdBasedOnWidth();
    setIsScrolled(scrollTop > threshold);
    if (scrollTop > 4750) {
      setSkip(1583);
    }
    if (scrollTop > 6000) {
      setSkip(2000);
    }

    const newIndex = Math.floor(scrollTop / skip);
    setIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleYScroll);
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.addEventListener("scroll", handleYScroll);
      window.addEventListener("resize", updateWindowWidth);
    };
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const getThresholdBasedOnWidth = () => {
    if (windowWidth < 950) {
      if (windowWidth > 640) {
        return 400;
      } else {
        return 150;
      }
    } else {
      return 500;
    }
  };

  return (
    <>
      <Container>
        <Wrapper isScrolled={isScrolled} color={colorArray[4]}>
          <Center>
            <ButtonFocus color={colorArray[0]} index={index}></ButtonFocus>
            <Button
              onClick={() => {
                handleScroll("ABOUT");
                handleIndex(0);
              }}
            >
              About
            </Button>
            <Button
              onClick={() => {
                handleScroll("EDUCATION");
                handleIndex(1);
              }}
            >
              Work & Study
            </Button>
            <Button
              onClick={() => {
                handleScroll("PROJECTS");
                handleIndex(2);
              }}
            >
              Projects
            </Button>
            <Button
              onClick={() => {
                handleScroll("SKILLS");
                handleIndex(3);
              }}
            >
              Skills
            </Button>
          </Center>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
