"use client";

import Img from "next/image";
import styled from "styled-components";

type FlagProp = {
  src: string;
  alt: string;
};

function Flag({ src, alt }: FlagProp) {
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 2px;

  /* crop out excess area of the flag */
  overflow: hidden;
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
`;

export default Flag;
