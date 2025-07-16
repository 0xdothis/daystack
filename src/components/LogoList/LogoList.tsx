"use client";

import styled from "styled-components";

import Image from "next/image";

type LogoListProps = {
  logo: string;
};

function LogoList({ logo }: LogoListProps) {
  return (
    <Wrapper>
      <Image src={logo} alt="project identifiers" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: auto;
  height: 36px;
  justify-self: center;

  & img {
    width: auto;
    height: 100%;
  }
`;

export default LogoList;
