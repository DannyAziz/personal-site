import styled from "styled-components";

const HeroSection = styled.section`
  height: 141px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.tablet} {
    height: 266px;
  }
`;

const HeroText = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  text-align: center;

  @media ${(p) => p.theme.breakpoints.tablet} {
    font-size: 65px;
    line-height: 78.65px;
  }

  @media ${(p) => p.theme.breakpoints.laptopL} {
    font-size: 100px;
    line-height: 121px;
  }
`;

const Hero = ({ text }) => (
  <HeroSection>
    <HeroText>{text}</HeroText>
  </HeroSection>
);

export default Hero;
