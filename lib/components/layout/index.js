import styled from "styled-components";

const Layout = styled.section`
  padding: 0 14px;
  @media ${(p) => p.theme.breakpoints.tablet} {
    padding: 0;
  }
`;

export default Layout;
