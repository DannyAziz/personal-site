import * as Styled from "./styled";

const ItemList = ({ title, items }) => {
  return (
    <Styled.ItemList>
      <Styled.Title>{title}</Styled.Title>
      <Styled.List>
        {items.map((item, index) => (
          <Styled.Item>
            <Styled.ItemImg src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" />
            <Styled.ItemMetaInfo>Type</Styled.ItemMetaInfo>
            <Styled.ItemTitle>Title</Styled.ItemTitle>
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.ItemList>
  );
};

export default ItemList;
