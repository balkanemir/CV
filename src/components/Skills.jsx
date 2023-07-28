import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  height: auto;
  transition: all 0.2s;
`;

const Wrapper = styled.div`
  padding: 50px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 5rem;
  color: ${(props) => props.color};
  font-family: "Acorn";
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 950px) {
    font-size: 5rem;
  }
  @media (max-width: 640px) {
    font-size: 4rem;
  }
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const Box = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    padding: 0;
  }
`;

const SectorTitle = styled.div`
  width: 100%;
  font-size: 32px;
  font-family: "Acorn";
  color: ${(props) => props.color};
  text-align: center;
  margin: 20px 0 20px 0;
`;

const TileContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 50px;
  flex: 1;
  margin: 10px;
  background-color: ${(props) => props.color};
`;

const Tile = styled.div`
  width: 12vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.colorbg};
  padding: 10px 20px 10px 20px;
  font-family: "Raleway";
  font-weight: bolder;
  font-size: 12px;
  color: ${(props) => props.color};
  transition: all 0.2s;
  @media (max-width: 1120px) {
    width: 20vw;
  }
  @media (max-width: 850px) {
    width: 30vw;
    margin: 20px;
  }
  @media (max-width: 550px) {
    width: 40vw;
    margin: 10px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Number = styled.div`
  width: auto;
  height: auto;
  font-size: 26px;
  font-family: "Acorn";
`;

const Year = styled.div`
  font-size: 12px;
  font-family: "Acorn";
`;

const Skills = forwardRef(({ colorArray, handleIndex }, refScrollSkills) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refWrapper, inViewWrapper] = useInView({
    triggerOnce: false,
    delay: 100,
    trackVisibility: true,
  });

  useEffect(() => {
    if (inViewWrapper) {
      handleIndex(3);
    }
  }, [inViewWrapper]);
  return (
    <Container ref={refScrollSkills} id="SKILLS">
      <Wrapper ref={refWrapper}>
        <Title isVisible={inViewTitle} ref={refTitle} color={colorArray[4]}>
          My Box.
        </Title>
        <Box isVisible={inView} ref={ref}>
          <TileContainer color={colorArray[0]}>
            <SectorTitle color={colorArray[4]}>
              Programming Languages
            </SectorTitle>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/html.png"></Icon>HTML
              <TimeContainer>
                <Number>~5</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/css4.png"></Icon>CSS{" "}
              <TimeContainer>
                <Number>~4</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/python.png"></Icon>Python{" "}
              <TimeContainer>
                <Number>~4</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/C++.png"></Icon>C++{" "}
              <TimeContainer>
                <Number>~3</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/js2.png"></Icon>Javascript{" "}
              <TimeContainer>
                <Number>~2</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/dart.png"></Icon>Dart{" "}
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
          </TileContainer>
          <TileContainer color={colorArray[0]}>
            <SectorTitle color={colorArray[4]}>Frameworks</SectorTitle>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/flask3.png"></Icon>Flask{" "}
              <TimeContainer>
                <Number>~3</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/react.png"></Icon>React
              <TimeContainer>
                <Number>~2</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/flutter.png"></Icon>Flutter
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/ajax.png"></Icon>Ajax{" "}
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/jquery.png"></Icon>Jquery{" "}
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/bootstrap.png"></Icon>Bootstrap 4
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
          </TileContainer>
        </Box>
        <Box isVisible={inView}>
          <TileContainer color={colorArray[0]}>
            <SectorTitle color={colorArray[4]}>Technologies</SectorTitle>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/vscode.webp"></Icon>VS Code
              <TimeContainer>
                <Number>~4</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/xcode.webp"></Icon>XCode
              <TimeContainer>
                <Number>~4</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/git.png"></Icon>Git
              <TimeContainer>
                <Number>~2</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/atom.png"></Icon>Atom{" "}
              <TimeContainer>
                <Number>~2</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/postman.png"></Icon>Postman
              <TimeContainer>
                <Number>~2</Number> <Year>yrs</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/docker.webp"></Icon>Docker{" "}
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/mysql.png"></Icon>MySQL
              <TimeContainer>
                <Number>~1</Number> <Year>yr</Year>
              </TimeContainer>
            </Tile>
          </TileContainer>
          <TileContainer color={colorArray[0]}>
            <SectorTitle color={colorArray[4]}>Languages</SectorTitle>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/turkey.png"></Icon>Turkish
              <Number>N</Number>
            </Tile>
            <Tile color={colorArray[0]} colorbg={colorArray[4]}>
              <Icon src="./images/us.png"></Icon>English <Number>C1</Number>
            </Tile>
          </TileContainer>
        </Box>
      </Wrapper>
    </Container>
  );
});

export default Skills;
