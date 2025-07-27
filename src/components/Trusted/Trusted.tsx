"use client";

import styled from "styled-components";
import Image from "next/image";

import MaxWidthWrapper from "../MaxWidthWrapper";

import vector from "../../../public/vector.svg";
import Heading from "@/ui/Heading";
import CardItem from "../CardItem";
import { BUSINESSES } from "../../../data";

function Trusted() {
  return (
    <Wrapper>
      <BackgroundImage src={vector} alt="vector shape for bacground styling" />
      <Container>
        <H2 level="h2">Trusted by 70,000+ businesses</H2>
        <Description>
          Thousands of organizations of all sizes trust Paystack to grow their
          business.
        </Description>

        <CardItem data={BUSINESSES} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  background-color: var(--color-blue-10);
  height: 783px;

  /* Crop of image spilling out of a container */
  overflow: hidden;
  z-index: -2;
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  opacity: 0.25;
  z-index: -1;
`;

const Container = styled(MaxWidthWrapper)`
  padding-top: var(--padding-96);
  padding-bottom: var(--padding-72);
`;

const H2 = styled(Heading)`
  font-size: var(--text-h2);
  margin-bottom: var(--margin-16);
`;

const Description = styled.p`
  font-size: var(--text-description);
  width: 650px;
  margin-bottom: var(--margin-40);
`;
export default Trusted;
