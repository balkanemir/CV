import { Copyright } from "@material-ui/icons";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: auto;
  background: linear-gradient(to top, ${(props) => props.color}, transparent);
`;

const Title = styled.div`
  text-align: center;
  font-size: 5rem;
  color: ${(props) => props.color};
  font-family: "Acorn";
  padding-bottom: 50px;
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

const Wrapper = styled.div`
  padding: 0 50px 0 50px;
`;

const Box = styled.div`
  height: auto;
  display: flex;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
  @media (max-width: 750px) {
    padding: 0;
  }
`;

const SubBox = styled.div`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    padding-top: 30px;
  }
`;

const SpotifyContainer = styled.a`
  width: 90%;
  height: 80px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SongDescription = styled.div``;

const SpotifyIcon = styled.img`
  height: 40px;
  width: 40px;
  margin: 20px 10px 20px 20px;
  opacity: 0.6;
  animation: ${RotateAnimation} 5s linear infinite;
`;

const SongName = styled.div`
  font-size: 14px;
  width: 100%;
  font-family: "Raleway";
  font-weight: 500;
  color: ${(props) => props.color};
  margin: 5px;
`;

const ArtistName = styled.div`
  font-size: 14px;
  width: 100%;
  font-family: "Raleway";
  font-weight: bolder;
  color: ${(props) => props.color};
  margin: 5px;
`;

const Audio = styled.audio`
  display: none;
`;
const Source = styled.source``;

const CopyRightIcon = styled.div`
  margin-right: 5px;
  transform: scale(0.9);
`;

const CopyRight = styled.div`
  font-size: 16px;
  color: ${(props) => props.color};
  font-family: "Raleway";
  font-weight: bold;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
`;

const Contact = styled.div`
  width: 60%;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 750px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const ContactTitle = styled.div`
  color: ${(props) => props.color};
  font-family: "Acorn";
  font-weight: bolder;
  font-size: 18px;
  text-align: center;
`;

const ContactInfo = styled.div`
  font-family: "Raleway";
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;

const SecretInfo = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => props.colorbg};
  color: ${(props) => props.color};
  font-family: "Raleway";
  font-weight: bolder;
  font-size: 14px;
  border-radius: 50px;
  text-align: center;
`;

const DownloadCVButton = styled.a`
  text-decoration: none;
  height: 40px;
  width: 20%;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${(props) => props.colorbg};
  color: ${(props) => props.color};
  font-family: "Raleway";
  font-weight: bolder;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 750px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  text-align: center;
  padding: 30px;
  font-size: 20px;
  font-family: "Acorn";
  color: ${(props) => props.color};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
`;

const ColorButtonContainer = styled.div`
  display: flex;
`;

const ColorButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  margin: 30px;
  cursor: pointer;
  background: radial-gradient(${(props) => props.colors});
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 1s;
  @media (max-width: 450px) {
    margin: 30px;
  }
`;

const Footer = ({ setColors, setColorArray, colorArray }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refSubTitle, inViewSubTitle] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const handleClick = (click) => {
    setColors(click);
    setColorArray(click.split(","));
  };
  return (
    <Container color={colorArray[0]}>
      <Wrapper>
        <Title isVisible={inViewTitle} ref={refTitle} color={colorArray[4]}>
          Enjoy.
        </Title>
        <Box>
          <SubBox>
            <Audio controls autoplay muted>
              <Source src="./images/Copacabana.mp3" type="audio/mp3"></Source>
            </Audio>
            <SpotifyContainer
              isVisible={inView}
              ref={ref}
              color={colorArray[4]}
              href="https://open.spotify.com/track/5FMXrphygZ4z3gVDHGWxgl"
            >
              <SpotifyIcon src="./images/spotify.png" />
              <SongDescription>
                <SongName color={colorArray[0]}>On Repeat</SongName>
                <ArtistName color={colorArray[0]}>
                  Copacabana - Barry Manilow
                </ArtistName>
              </SongDescription>
            </SpotifyContainer>
            <ColorButtonContainer>
              <ColorButton
                isVisible={inView}
                onClick={() =>
                  handleClick("#450920, #a53860, #da627d, #ffa5ab, #ffccd5")
                }
                colors={"#450920, #a53860, #da627d, #ffa5ab, #ffccd5"}
              ></ColorButton>
              <ColorButton
                isVisible={inView}
                onClick={() =>
                  handleClick("#283618, #3a5a40, #588157, #a3b18a, #cad2c5")
                }
                colors={"#283618, #3a5a40, #588157, #a3b18a, #cad2c5"}
              ></ColorButton>
              <ColorButton
                isVisible={inView}
                onClick={() =>
                  handleClick("#03045e, #023e8a, #0077b6, #00b4d8, #ade8f4")
                }
                colors={"#03045e, #023e8a, #0077b6, #00b4d8, #ade8f4"}
              ></ColorButton>
            </ColorButtonContainer>
          </SubBox>
          <SubBox>
            <Contact isVisible={inView}>
              <ContactTitle color={colorArray[4]}>Contact</ContactTitle>
              <ContactInfo>
                <SecretInfo color={colorArray[4]} colorbg={colorArray[0]}>
                  emir_balkan@hotmail.com
                </SecretInfo>
                <SecretInfo color={colorArray[4]} colorbg={colorArray[0]}>
                  +90 533 677 83 93
                </SecretInfo>
              </ContactInfo>
            </Contact>
            <DownloadCVButton
              href="/CV.pdf"
              download="EmirBalkanCV.pdf"
              isVisible={inView}
              color={colorArray[0]}
              colorbg={colorArray[4]}
            >
              See my CV
            </DownloadCVButton>
          </SubBox>
        </Box>
        <SubTitle
          isVisible={inViewSubTitle}
          ref={refSubTitle}
          color={colorArray[4]}
        >
          Thanks for visiting my website. Have a great day!{" "}
          <CopyRight isVisible={inViewSubTitle} color={colorArray[4]}>
            <CopyRightIcon>
              <Copyright />
            </CopyRightIcon>
            2023 Emir Balkan
          </CopyRight>
        </SubTitle>
      </Wrapper>
    </Container>
  );
};

export default Footer;
