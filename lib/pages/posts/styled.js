import styled from "styled-components";

export const A = styled.a`
  text-decoration: none;
`;

export const Ul = styled.ul`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media ${(p) => p.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Card = styled.li`
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 5px;
  padding: 40px;

  cursor: pointer;

  transition: all 0.33s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 30%;
  border-radius-top-right: 5px;
  border-radius-top-left: 5px;
`;

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  font-height: 1.2em;

  text-align: center;

  margin-bottom: 12px;

  color: #0d1523;
`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  font-weight: normal;
  font-height: 1.2em;
  text-align: center;

  color: #0d1523;
`;
