"use client";
import styled from "styled-components";
// import Img from "next/image";
import logo from "../../../public/logos/paystack.svg";
import Link from "next/link";

function Logo() {
  return (
    <Wrapper>
      <Link href="/" rel="=preload" as="image">
        <Image src={logo.src} alt="number one payment solutions" />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 150px;
  /* flex: 1; */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
export default Logo;
