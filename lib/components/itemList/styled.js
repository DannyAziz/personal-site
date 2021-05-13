import styled from "styled-components";

export const ItemList = styled.div``;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 38px;
`;

export const Item = styled.li`
  width: 100%;

  display: grid;
  grid-gap: 6px;
  grid-template-rows: auto 1fr 1fr;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemMetaInfo = styled.span`
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  opacity: 0.8;
`;

export const ItemTitle = styled.p`
  font-size: 26px;
  line-height: 31px;
`;
