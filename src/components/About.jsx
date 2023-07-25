import React, { forwardRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Container = styled.div`
  height: auto;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  padding: 0px 50px 20px 50px;
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

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: auto;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 25vw;
  height: 35vw;
  margin: 0 50px 0 50px;
  border-top-right-radius: 20vw;
  border-top-left-radius: 20vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 950px) {
    border-top-right-radius: 150px;
    border-top-left-radius: 150px;
    width: 300px;
    height: 400px;
  }
`;

const Image = styled.img`
  width: 25vw;
  height: 28vw;
  @media (max-width: 950px) {
    width: 300px;
    height: 330px;
  }
`;

const ImageFooter = styled.div`
  height: 10vw;
  width: 25vw;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-around;
  @media (max-width: 1100px) {
    justify-content: center;
  }
  @media (max-width: 950px) {
    width: 300px;
    height: 100px;
    align-items: center;
  }
`;

const Logo = styled.a`
  width: 60px;
  height: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 1100px) {
    padding: 0;
    width: 30px;
    margin: 0 5px 0 5px;
  }
  @media (max-width: 950px) {
    height: 50px;
    margin: 0 10px 0 10px;
  }
`;

const LinkedInIcon = styled(LinkedIn)`
  font-size: 50px !important;
  color: #023e8a;
  @media (max-width: 1100px) {
    font-size: 35px !important;
  }
`;

const GitHubIcon = styled(GitHub)`
  font-size: 40px !important;
  color: black;
  @media (max-width: 1100px) {
    font-size: 25px !important;
  }
`;

const TwitterIcon = styled(Twitter)`
  font-size: 40px !important;
  color: #00697e;
  @media (max-width: 1100px) {
    font-size: 25px !important;
  }
`;

const InstagramIcon = styled(Instagram)`
  font-size: 40px !important;
  color: black;
  @media (max-width: 1100px) {
    font-size: 25px !important;
  }
`;

const CodePen = styled.img`
  color: black;
  width: 40px;
  height: 40px;
  @media (max-width: 1100px) {
    width: 25px;
    height: 25px;
  }
`;

const ContentContainer = styled.div`
  width: 50vw;
  height: auto;
  padding: 30px;
  @media (max-width: 950px) {
    text-align: center;
    width: 70vw;
  }
`;

const ContentTitle = styled.div`
  font-size: 40px;
  font-family: "Acorn";
  color: ${(props) => props.color};
  @media (max-width: 1125px) {
    font-size: 30px;
  }
  @media (max-width: 950px) {
    font-size: 25px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
  }
`;

const Content = styled.div`
  font-size: 18px;
  font-family: "Raleway";
  color: ${(props) => props.color};
  line-height: 30px;
  font-weight: bold;
  margin-top: 30px;
  @media (max-width: 1125px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  color: ${(props) => props.color};
`;

const About = forwardRef(({ colorArray }, refScrollAbout) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Container ref={refScrollAbout} id="ABOUT">
      <Wrapper>
        <Title isVisible={inView} ref={ref} color={colorArray[4]}>
          I'm Emir.
        </Title>
        <AboutContainer isVisible={inViewAbout} ref={refAbout}>
          <ImageContainer>
            <Image src="./images/image.png" />
            <ImageFooter color={colorArray[4]}>
              <Logo href="https://www.linkedin.com/in/emir-balkan-3b820b227/">
                <LinkedInIcon></LinkedInIcon>
              </Logo>
              <Logo href="https://github.com/balkanemir">
                <GitHubIcon></GitHubIcon>
              </Logo>
              <Logo href="https://codepen.io/your-work/">
                <CodePen src="./images/codepen.png"></CodePen>
              </Logo>
              <Logo href="https://twitter.com/EmirBlkn">
                <TwitterIcon></TwitterIcon>
              </Logo>
              <Logo href="https://www.instagram.com/emirbalkan_/">
                <InstagramIcon></InstagramIcon>
              </Logo>
            </ImageFooter>
          </ImageContainer>
          <ContentContainer>
            <ContentTitle color={colorArray[4]}>
              I'm a Computer Science & Engineering student working remotely from
              Istanbul, Turkey.
            </ContentTitle>
            <Content color={colorArray[4]}>
              In the beginning of my carrier as a front-end developer, I want to
              improve my skills in front-end development by learning most-used
              frameworks in the world such as ReactJS, Angular, Vue.js etc. In
              the light of this goal, I'm converting amazing designs into
              ReactJS. As i said, I'm in the beginning of my carrier; so I do
              not have too many projects right now, but I am passionate and I
              trust myself.
            </Content>
            <Content color={colorArray[4]}>
              I'm currently working in{" "}
              <Link color={colorArray[4]} href="https://myth-ai.com/">
                MYTH-ai
              </Link>{" "}
              as an intern. MYTH is a company working on generative AI tool
              producing patterns.
            </Content>
          </ContentContainer>
        </AboutContainer>
      </Wrapper>
    </Container>
  );
});

export default About;
