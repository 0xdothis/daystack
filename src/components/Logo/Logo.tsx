"use client";
import styled from "styled-components";
import Img from "next/image";
import logo from "../../../public/logos/paystack.svg";

function Logo() {
  return (
    <Wrapper>
      <Image src={logo} alt="number one payment solutions" />
      <Text>paystack</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Image = styled(Img)`
  width: 100%;
  display: block;
  /* aspect-ratio: 2/1; */
`;

const Text = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`;

export default Logo;
