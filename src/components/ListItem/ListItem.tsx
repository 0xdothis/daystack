"use client";

import styled from "styled-components";

import List from "../List";

type WrapperProps = {
  $gridType?: string;
  $marginTop: string;
  $marginBottom: string;
};

type ListItemProps = {
  bulletin: string[];
  gridType?: string;
  marginTop: string;
  marginBottom: string;
};

function ListItem({
  bulletin,
  gridType,
  marginTop,
  marginBottom,
}: ListItemProps) {
  return (
    <Wrapper
      $gridType={gridType}
      $marginBottom={marginBottom}
      $marginTop={marginTop}
    >
      {bulletin.map((text) => (
        <List key={crypto.randomUUID()} text={text} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul<WrapperProps>`
  display: grid;
  grid-template-columns: ${(p) => p.$gridType};
  gap: var(--gap-8);
  margin-top: calc(${(p) => p.$marginTop} + 4px);
  margin-bottom: calc(${(p) => p.$marginBottom} + 4px);
`;

export default ListItem;
