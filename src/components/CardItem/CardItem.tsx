"use client";

import styled from "styled-components";
import type { CardProps } from "../Card/Card";
import Card from "../Card/Card";

interface DataProps {
  data: CardProps[];
}

function CardItem({ data }: DataProps) {
  return (
    <Wrapper>
      {data.map((card) => (
        <Card {...card} key={crypto.randomUUID()} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default CardItem;
