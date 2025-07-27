"use client";

import styled from "styled-components";
import type { CardProps } from "../Card/Card";
import Card from "../Card/Card";

interface DataProps {
  data: CardProps[];
  imageWidth?: string;
  imageHeight?: string;
  imageWrapper?: string;
}

function CardItem({ imageWidth, imageWrapper, imageHeight, data }: DataProps) {
  return (
    <Wrapper>
      {data.map((card) => (
        <Card
          {...card}
          key={crypto.randomUUID()}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          imageWrapper={imageWrapper}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--gap-32);
`;

export default CardItem;
