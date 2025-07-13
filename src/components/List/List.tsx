"use client";
import styled from "styled-components";

import Icon from "../Icon";

type ListProp = {
  text: string;
};

function List({ text }: ListProp) {
  return (
    <Wrapper>
      <Bullet>
        <Icon id="check" size={16} strokeWidth={4} />
      </Bullet>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
`;

const Bullet = styled.span`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 8px;
  padding-right: 14px;
  border-radius: 0px 8px 8px 0px;
  width: fit-content;
  display: block;
  background-color: var(--color-green-10);
  color: var(--color-primary);
  align-self: flex-start;
`;

const Text = styled.span`
  margin-left: -8px;
`;

export default List;
