import React, { useState, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
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
  display: flex;
  padding: 10px;
  width: 90vw;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  @media (max-width: 1050px) {
    height: 120vw;
  }
  @media (max-width: 500px) {
    height: 300vw;
  }
`;

const Tile = styled.a`
  flex: 1;
  height: 35vw;
  width: 25vw;
  margin: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  position: relative;
  cursor: ${(props) => (props.isSoon ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    transform: translateY(${(props) => (props.isSoon ? "0px" : "-5px")});
    box-shadow: ${(props) => (props.isSoon ? "0" : "0 0 1px 1px white")};
  }
  @media (max-width: 1050px) {
    width: 85vw;
    height: 45vw;
  }
  @media (max-width: 500px) {
    width: 70vw;
    margin: 20px auto 20px auto;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid ${(props) => props.border};
  background-color: ${(props) => props.color};
  overflow: hidden;
  @media (max-width: 1400px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 1300px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 1050px) {
    left: 80%;
    top: 50%;
    width: 120px;
    height: 120px;
  }
  @media (max-width: 740px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 500px) {
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 20%);
  }
  @media (max-width: 440px) {
    width: 90px;
    height: 90px;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: 1400px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 740px) {
    width: 40px;
    height: 40px;
  }
`;

const TitleContainer = styled.div`
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1050px) {
    width: 40vw;
    justify-content: left;
    margin: 30px;
  }
  @media (max-width: 740px) {
    margin: 20px 0 0 30px;
  }
  @media (max-width: 500px) {
    width: 70vw;
    justify-content: center;
    margin: 20px 0 20px 0;
  }
`;

const ProjectTitle = styled.div`
  color: ${(props) => props.color};
  font-family: "Raleway";
  font-weight: bolder;
  font-size: 20px;
  @media (max-width: 740px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const SoonTag = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.bgcolor};
  background-color: ${(props) => props.color};
  border-radius: 50px;
  font-size: 14px;
  font-family: "Raleway";
  font-weight: bold;
  margin-left: 10px;
  @media (max-width: 1050px) {
  }
  @media (max-width: 740px) {
    font-size: 12px;
    width: 50px;
    height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    width: 50px;
    height: 20px;
  }
`;
const LineTop = styled.img`
  position: absolute;
  width: 30vw;
  top: ${(props) => (props.isHovered ? "-5px" : "-20px")};
  opacity: 0.5;
  transition: top 0.2s;
  @media (max-width: 1050px) {
    width: 85vw;
    top: ${(props) => (props.isHovered ? "-10px" : "-30px")};
  }
  @media (max-width: 550px) {
    top: ${(props) => (props.isHovered ? "-5px" : "-30px")};
  }
`;

const LineBottom = styled.img`
  width: 30vw;
  position: absolute;
  bottom: ${(props) => (props.isHovered ? "-5px" : "-20px")};
  opacity: 0.5;
  transition: bottom 0.2s;
  @media (max-width: 1050px) {
    width: 85vw;
    bottom: ${(props) => (props.isHovered ? "-10px" : "-30px")};
  }
  @media (max-width: 550px) {
    bottom: ${(props) => (props.isHovered ? "-5px" : "-30px")};
  }
`;

const Content = styled.div`
  color: ${(props) => props.color};
  font-family: "Raleway";
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0px 30px 30px 30px;
  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    margin: 20px 30px 30px 30px;
  }
  @media (max-width: 1050px) {
    width: 50vw;
    text-align: left;
  }
  @media (max-width: 740px) {
    height: 20vw;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    text-align: center;
    margin: 40px auto;
  }
  @media (max-width: 440px) {
    margin: 20px auto;
    line-height: 15px;
  }
`;

const Projects = forwardRef(
  ({ colorArray, handleIndex }, refScrollProjects) => {
    const [isHovered, setIsHovered] = useState("");
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
    const [refTitle, inViewTitle] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
    const handleHover = (hover) => {
      setIsHovered(hover);
    };

    const [refWrapper, inViewWrapper] = useInView({
      triggerOnce: false,
      delay: 100,
      trackVisibility: true,
    });

    useEffect(() => {
      if (inViewWrapper) {
        handleIndex(2);
      }
    }, [inViewWrapper]);

    return (
      <Container ref={refScrollProjects} id="PROJECTS">
        <Wrapper ref={refWrapper}>
          {" "}
          <Title isVisible={inViewTitle} ref={refTitle} color={colorArray[4]}>
            Play.
          </Title>
          <TileContainer>
            <Tile
              href="https://main--euphonious-lamington-c6feca.netlify.app/"
              isVisible={inView}
              ref={ref}
              color={colorArray[0]}
              isSoon={false}
            >
              <TitleContainer>
                <ProjectTitle color={colorArray[4]}>NikeFactory</ProjectTitle>
              </TitleContainer>
              <Content color={colorArray[3]}>
                NikeFactory is a shopping UI. It is compatible for every kind of
                textile product. It is responsive and written with ReactJS.
                Let's shopping!
              </Content>
              <ImageContainer border={colorArray[2]} color={colorArray[4]}>
                <Image src="./images/sneakers.png" />
              </ImageContainer>
            </Tile>
            <Tile
              isVisible={inView}
              color={colorArray[0]}
              isSoon={true}
              onMouseEnter={() => handleHover("Tile1")}
              onMouseLeave={() => handleHover("")}
            >
              <LineTop
                isHovered={isHovered === "Tile1"}
                src={
                  colorArray[0] === "#03045e"
                    ? "./images/blueline.png"
                    : colorArray[0] === "#283618"
                    ? "./images/greenline.png"
                    : "./images/pinkline.png"
                }
              />
              <LineBottom
                isHovered={isHovered === "Tile1"}
                src={
                  colorArray[0] === "#03045e"
                    ? "./images/blueline.png"
                    : colorArray[0] === "#283618"
                    ? "./images/greenline.png"
                    : "./images/pinkline.png"
                }
              />
              <TitleContainer>
                <ProjectTitle color={colorArray[4]}>SeedLab</ProjectTitle>
                <SoonTag color={colorArray[4]} colorbg={colorArray[0]}>
                  Soon
                </SoonTag>
              </TitleContainer>
              <Content color={colorArray[3]}>
                SedLab is an commercial UI for promotion of agricultural
                products. Pesticides, seeds and every kind of product can be
                promoted. It is being written with ReactJS. Hopefully, it will
                be published soon. Stay tuned!
              </Content>
              <ImageContainer border={colorArray[2]} color={colorArray[4]}>
                <Image src="./images/corn.png" />
              </ImageContainer>
            </Tile>
            <Tile
              isVisible={inView}
              color={colorArray[0]}
              isSoon={true}
              onMouseEnter={() => handleHover("Tile2")}
              onMouseLeave={() => handleHover("")}
            >
              <LineTop
                isHovered={isHovered === "Tile2"}
                src={
                  colorArray[0] === "#03045e"
                    ? "./images/blueline.png"
                    : colorArray[0] === "#283618"
                    ? "./images/greenline.png"
                    : "./images/pinkline.png"
                }
              />
              <LineBottom
                isHovered={isHovered === "Tile2"}
                src={
                  colorArray[0] === "#03045e"
                    ? "./images/blueline.png"
                    : colorArray[0] === "#283618"
                    ? "./images/greenline.png"
                    : "./images/pinkline.png"
                }
              />
              <TitleContainer>
                <ProjectTitle color={colorArray[4]}>Delicious</ProjectTitle>
                <SoonTag color={colorArray[4]} colorbg={colorArray[0]}>
                  Soon
                </SoonTag>
              </TitleContainer>
              <Content color={colorArray[3]}>
                Delicious is a bakery UI. It is being designing & coding with
                ReactJS for bakery owners, who they can promote their pastries
                and cakes. Hopefully, it will be delicious!
              </Content>
              <ImageContainer border={colorArray[2]} color={colorArray[4]}>
                <Image src="./images/cookie.png" />
              </ImageContainer>
            </Tile>
          </TileContainer>
        </Wrapper>
      </Container>
    );
  }
);

export default Projects;
