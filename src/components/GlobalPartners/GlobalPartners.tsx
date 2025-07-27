"use client";

import styled from "styled-components";
import Image from "next/image";

import CardItem from "../CardItem";
import ContainerTemplate from "../ContainerTemplate";
import SectionTemplateWithImage from "../SectionTemplateWithImage";
import vector from "../../../public/circle.svg";

import { USERS } from "../../../data";

function GlobalPartners() {
  return (
    <Wrapper>
      <BackgroundImage src={vector} alt="vector shape for bacground styling" />
      <ContainerTemplate>
        <SectionTemplateWithImage
          heading="Backed by strong global 
partners"
          description="Paystack is backed by notable investors as well as some of the best 
payments companies on the planet."
          level="h2"
        >
          <CardItem
            data={USERS}
            imageWidth="fit-content"
            imageHeight="40px"
            imageWrapper="var(--margin-16)"
          />
        </SectionTemplateWithImage>
      </ContainerTemplate>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  background-color: var(--color-bg);
  color: var(--color-text);
  padding-top: var(--padding-96);
  padding-bottom: var(--padding-56);
  /* Crop of image spilling out of a container */
  overflow: hidden;
  z-index: -2;
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.75;
  z-index: -1;
`;

export default GlobalPartners;
