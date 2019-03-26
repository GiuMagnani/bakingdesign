import React from "react";
import styled from "styled-components";
import bgImage from "../images/bg-baking-design.jpg";

const Hero = () => (
  <HeroWrapper>
    <Text
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      {/*<em>When in doubt</em>*/}
      {/*<h2>Do it all</h2>*/}
      <div>
        <span>Hello! I'm</span>
        <h1>Baking Design</h1>
      </div>
      <h2>lettering artist - illustrator - graphic designer - Crafter</h2>
    </Text>
    {/*<WaveContainer>*/}
    {/*<WaveDiv />*/}
    {/*<WaveDiv />*/}
    {/*</WaveContainer>*/}
  </HeroWrapper>
);

const HeroWrapper = styled.div`
  height: 100vh;
`;

const Text = styled.div`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 200px;
  }

  h2 {
    color: black;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: black;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: normal;
    font-family: sans-serif;
  }

  span {
    font-size: 18px;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: calc(1rem + 50px);
    left: 2rem;
    height: calc(100% - (3rem + 50px));
    width: calc(100% - 4rem);
    background-color: white;
  }
`;

export default Hero;
