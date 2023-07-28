import React, { useState, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  padding: 0px 50px 20px 50px;
  @media (max-width: 950px) {
    padding: 0;
  }
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

const TileContainer = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const Tile = styled.div`
  width: 90vw;
  height: 6vw;
  display: flex;
  margin: 10px;
  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;
    margin: 0;
  }
`;

const SubTile = styled.div`
  position: absolute;
  height: 6vw;
  width: ${(props) => (props.isVisible ? props.width : 0)}vw;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  margin-left: ${(props) => props.margin}vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s;
  @media (max-width: 950px) {
    margin-top: 10px;
    margin-left: 0;
    width: ${(props) => (props.isVisible ? 90 : 0)}vw;
    position: relative;
    justify-content: space-around;
  }
  @media (max-width: 740px) {
    height: 60px;
  }
`;

const SubTileTitle = styled.div`
  width: ${(props) => props.width}vw;
  height: 50px;
  font-size: 16px;
  font-family: "Acorn";
  font-weight: 900;
  color: ${(props) => props.color};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: ${(props) => props.margin}px;
  margin-right: ${(props) => props.margin}px;
  transition: all 2s;
  @media (max-width: 1200px) {
    font-size: 14px;
    margin-left: ${(props) => props.margin - 10}px;
    margin-right: ${(props) => props.margin - 10}px;
  }
  @media (max-width: 950px) {
    width: 50vw;
  }
`;

const BigTileContainer = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`;

const BigTileUp = styled.div`
  width: 90vw;
  height: 35vw;
  display: flex;
  align-items: center;
  @media (max-width: 950px) {
    height: 70vw;
  }
  @media (max-width: 740px) {
    height: 100vw;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    height: 800px;
  }
`;

const BigTileDown = styled.div`
  width: 90vw;
  height: 35vw;
  display: flex;
  align-items: left;

  @media (max-width: 950px) {
    height: 70vw;
  }
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
    height: 100vw;
  }
  @media (max-width: 600px) {
    height: 800px;
  }
`;

const BigTile = styled.div`
  flex: ${(props) => props.flex};
  border-radius: 50px;
  margin: 20px;
  background-color: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
  transform: translateY(
    ${(props) => (props.isVisible ? (props.isHovered ? "-2%" : "0") : "40px")}
  );
  height: ${(props) => (props.isHovered ? "92%" : "90%")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.5s;
  @media (max-width: 950px) {
    flex: 1;
    height: 80%;
  }
  @media (max-width: 740px) {
    height: 100%;
    width: 90vw;
  }
`;

const Image = styled.img`
  width: 80%;
  height: ${(props) => (props.isHovered ? "68%" : "70%")};
  position: absolute;
  right: -20%;
  top: ${(props) => (props.isHovered ? "47%" : "45%")};
  border-radius: 50px;
  transition: all 0.4s;
  @media (max-width: 950px) {
    right: 0px;
    top: ${(props) => (props.isHovered ? "69%" : "65%")};
    height: 40%;
    width: 100%;
  }
  @media (max-width: 740px) {
    right: -30px;
    top: ${(props) => (props.isHovered ? "69%" : "65%")};
    height: 40%;
    width: 50%;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    right: -30px;
    top: ${(props) => (props.isHovered ? "69%" : "65%")};
    height: 40%;
    width: 60%;
  }
`;

const BigTileTitle = styled.div`
  font-size: 40px;
  font-family: "Acorn";
  margin: 30px;
  color: ${(props) => props.color};
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 740px) {
    font-size: 24px;
  }
`;

const BigTileContent = styled.div`
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  position: absolute;
  top: 20%;
  left: 10px;
  width: 100%;
  height: 30%;
  padding: 10px 0 0 30px;
  font-family: "Raleway";
  font-weight: bold;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  @media (max-width: 1200px) {
    font-size: 12px;
    padding: 10px 0 0 20px;
  }
  @media (max-width: 950px) {
    padding: 20px 0 0 20px;
    width: 80%;
  }
  @media (max-width: 800px) {
    padding: 30px 0 0 20px;
  }
`;

const BigTileList = styled.ul``;

const BigTileListItem = styled.li`
  line-height: 30px;
  @media (max-width: 950px) {
    line-height: 25px;
  }
  @media (max-width: 800px) {
    line-height: 20px;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  color: ${(props) => props.color};
  margin-top: 10px;
`;

const Education = forwardRef(
  ({ colorArray, handleIndex }, refScrollEducation) => {
    const [isHovered, setIsHovered] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);

    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    const [refTitle, inViewTitle] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    const [refBigTile, inViewBigTile] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      delay: 100,
      trackVisibility: true,
    });

    const [refWrapper, inViewWrapper] = useInView({
      triggerOnce: false,
      delay: 100,
      trackVisibility: true,
    });

    const handleHover = (hover) => {
      setIsHovered(hover);
      setIsDisabled(!hover);
    };

    useEffect(() => {
      if (inViewWrapper) {
        handleIndex(1);
      }
    }, [inViewWrapper]);

    return (
      <Container ref={refScrollEducation} id="EDUCATION">
        <Wrapper ref={refWrapper}>
          <Title ref={refTitle} isVisible={inViewTitle} color={colorArray[4]}>
            Junior.
          </Title>
          <TileContainer>
            <Tile>
              <SubTile
                isVisible={inView}
                ref={ref}
                color={colorArray[4]}
                width={15}
                margin={35}
              >
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={5}
                  margin={15}
                >
                  Nobel
                </SubTileTitle>
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={8}
                  margin={15}
                >
                  2022 Summer
                </SubTileTitle>
              </SubTile>
              <SubTile
                isVisible={inView}
                ref={ref}
                color={colorArray[4]}
                width={15}
                margin={50}
              >
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={10}
                  margin={15}
                >
                  Sungkyungwan University
                </SubTileTitle>
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={10}
                  margin={15}
                >
                  2022 Fall
                </SubTileTitle>
              </SubTile>
              <SubTile
                isVisible={inView}
                ref={ref}
                color={colorArray[4]}
                width={20}
                margin={65}
              >
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={5}
                  margin={30}
                >
                  MYTH-AI
                </SubTileTitle>
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={8}
                  margin={10}
                >
                  2023 Feb - Current
                </SubTileTitle>
              </SubTile>
            </Tile>
            <Tile>
              <SubTile
                isVisible={inView}
                ref={ref}
                color={colorArray[4]}
                width={85}
                margin={0}
              >
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={10}
                  margin={30}
                >
                  Sabancı University
                </SubTileTitle>
                <SubTileTitle
                  isVisible={inView}
                  ref={ref}
                  color={colorArray[0]}
                  width={10}
                  margin={30}
                >
                  2019 - Current
                </SubTileTitle>
              </SubTile>
            </Tile>
            <BigTileContainer>
              <BigTileUp>
                <BigTile
                  isVisible={inViewBigTile}
                  ref={refBigTile}
                  flex={2}
                  bgColor={isHovered === "SABANCI" ? "#93b0ff" : "#cddafd"}
                  onMouseEnter={() => handleHover("SABANCI")}
                  onMouseLeave={() => handleHover(null)}
                  isHovered={isHovered === "SABANCI"}
                >
                  <BigTileTitle color={colorArray[0]}>
                    Sabancı University
                  </BigTileTitle>
                  <Image
                    src="./images/sub3.png"
                    isHovered={isHovered === "SABANCI"}
                  />
                  <BigTileContent
                    color={colorArray[0]}
                    isHovered={isHovered === "SABANCI"}
                  >
                    Key Courses
                    <BigTileList>
                      <BigTileListItem>Data Structures</BigTileListItem>
                      <BigTileListItem>Database Systems</BigTileListItem>
                      <BigTileListItem>Mobile Development</BigTileListItem>
                      <BigTileListItem>Software Engineering</BigTileListItem>
                    </BigTileList>
                    <Link
                      color={colorArray[0]}
                      aria-disabled={isDisabled}
                      href="https://www.sabanciuniv.edu/en"
                    >
                      See More
                    </Link>
                    <Link
                      color={colorArray[0]}
                      aria-disabled={isDisabled}
                      href="https://www.timeshighereducation.com/world-university-rankings/sabanci-university"
                    >
                      See World Rank
                    </Link>
                  </BigTileContent>
                </BigTile>
                <BigTile
                  isVisible={inViewBigTile}
                  flex={1}
                  bgColor={isHovered === "MYTH" ? "#d284ff" : "#e2afff"}
                  onMouseEnter={() => handleHover("MYTH")}
                  onMouseLeave={() => handleHover(null)}
                  isHovered={isHovered === "MYTH"}
                >
                  <BigTileTitle color={colorArray[0]}>MYTH AI</BigTileTitle>
                  <Image
                    src="./images/myth2.jpeg"
                    isHovered={isHovered === "MYTH"}
                  />
                  <BigTileContent
                    color={colorArray[0]}
                    isHovered={isHovered === "MYTH"}
                  >
                    Key Roles
                    <BigTileList>
                      <BigTileListItem>Applying Data Scraping</BigTileListItem>
                      <BigTileListItem>
                        Training SOTA Classification Models
                      </BigTileListItem>
                      <BigTileListItem>Building ETL Pipeline</BigTileListItem>
                    </BigTileList>
                    <Link
                      color={colorArray[0]}
                      aria-disabled={isDisabled}
                      href="https://myth-ai.com/"
                    >
                      See More
                    </Link>
                  </BigTileContent>
                </BigTile>
              </BigTileUp>
              <BigTileDown>
                <BigTile
                  isVisible={inViewBigTile}
                  flex={1}
                  bgColor={isHovered === "NOBEL" ? "#ffa6c6" : "#fad2e1"}
                  onMouseEnter={() => handleHover("NOBEL")}
                  onMouseLeave={() => handleHover(null)}
                  isHovered={isHovered === "NOBEL"}
                >
                  <BigTileTitle color={colorArray[0]}>Nobel</BigTileTitle>
                  <Image
                    src="./images/nobel.png"
                    isHovered={isHovered === "NOBEL"}
                  />
                  <BigTileContent
                    color={colorArray[0]}
                    isHovered={isHovered === "NOBEL"}
                  >
                    Key Roles
                    <BigTileList>
                      <BigTileListItem>Worked on SQL Commands</BigTileListItem>
                      <BigTileListItem>
                        Applied HTML & CSS Properties
                      </BigTileListItem>
                    </BigTileList>
                    <Link
                      color={colorArray[0]}
                      href="https://www.nobel.com.tr/en-us"
                    >
                      See More
                    </Link>
                  </BigTileContent>
                </BigTile>
                <BigTile
                  isVisible={inViewBigTile}
                  flex={2}
                  bgColor={isHovered === "SUNG" ? "#8ae4d0" : "#bee3db"}
                  onMouseEnter={() => handleHover("SUNG")}
                  onMouseLeave={() => handleHover(null)}
                  isHovered={isHovered === "SUNG"}
                >
                  <BigTileTitle color={colorArray[0]}>
                    Sunkyungkwan University
                  </BigTileTitle>
                  <Image
                    src="./images/skku2.png"
                    isHovered={isHovered === "SUNG"}
                  />
                  <BigTileContent
                    color={colorArray[0]}
                    isHovered={isHovered === "SUNG"}
                  >
                    Key Courses
                    <BigTileList>
                      <BigTileListItem>Algorithms</BigTileListItem>
                      <BigTileListItem>
                        Web Programming with HTML, CSS, JS and JQUERY
                      </BigTileListItem>
                      <BigTileListItem>Media UX Design</BigTileListItem>
                    </BigTileList>
                    <Link
                      color={colorArray[0]}
                      aria-disabled={isDisabled}
                      href="https://www.skku.edu/eng/index.do"
                    >
                      See More
                    </Link>
                    <Link
                      color={colorArray[0]}
                      aria-disabled={isDisabled}
                      href="https://www.timeshighereducation.com/world-university-rankings/sungkyunkwan-university-skku"
                    >
                      See World Rank
                    </Link>
                  </BigTileContent>
                </BigTile>
              </BigTileDown>
            </BigTileContainer>
          </TileContainer>
        </Wrapper>
      </Container>
    );
  }
);

export default Education;
