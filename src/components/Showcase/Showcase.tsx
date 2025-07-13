"use client";

import Button from "@/ui/Button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styled from "styled-components";
import Heading from "@/ui/Heading";
import Image from "next/image";

import showcaseImage from "../../../public/hero_img.png";
import dominos from "../../../public/logos/dominos.png";
import bolt from "../../../public/logos/bolt.png";
import mtn from "../../../public/logos/mtn.png";
import axaMansard from "../../../public/logos/axa_mansard.png";
import { WEIGHTS } from "../../../constant";
import Icon from "../Icon";

function Showcase() {
  return (
    <Wrapper>
      <Container>
        <ShowcaseContent>
          <ShowcaseHero>
            <SectionText>
              <H1>Modern Online and Offline Payment for Africa</H1>
              <DescriptionText>
                Payment helps businesses in Africa get paid by anyone, anywhere
                in the world
              </DescriptionText>
              <ActionButton>
                <Button>Create a New Account</Button>
                <Button href="/support">or Contact Sales</Button>
              </ActionButton>
            </SectionText>
            <SectionImage>
              <Image
                src={showcaseImage}
                alt="location of paystack across the globe"
                priority={true}
              />
            </SectionImage>
          </ShowcaseHero>
        </ShowcaseContent>
        <H4 level="h4">Trusted by over 60,000 businesses</H4>
        <ShowcaseBottom>
          <Left>
            <Small>Trusted by over 60,000 businesses</Small>
            <ImageWrapper>
              <Image src={dominos} alt="donimos pizza company" />
              <Image src={mtn} alt="network provider mtn" />
              <Image src={bolt} alt="bolt for private car hire" />
              <Image src={axaMansard} alt="accounting fire for auditting" />
            </ImageWrapper>
          </Left>
          <Right>
            <CaptionText>
              Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss
              working with Paystack
            </CaptionText>
            <Circle>
              <Icon id="play" />
            </Circle>
          </Right>
        </ShowcaseBottom>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-green-10);
  color: var(--color-text);
`;

const Container = styled(MaxWidthWrapper)`
  padding-bottom: var(--padding-x-72);
`;

const ShowcaseContent = styled.div`
  padding-top: calc(var(--padding-80) * 2);
  padding-bottom: var(--padding-72);
`;

const ShowcaseHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled(Heading)`
  font-size: var(--text-h1);
  font-weight: ${WEIGHTS.bold};
  margin-bottom: var(--margin-16);
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
`;

const SectionImage = styled.div`
  margin-top: calc(var(--margin-32) * -2);
  height: 509px;
  width: 360px;

  & img {
    width: 100%;
    display: block;
    height: auto;
  }
`;

const DescriptionText = styled.p`
  max-width: 515px;
  font-size: var(--text-description);
  margin-bottom: var(--margin-48);
`;

const ActionButton = styled.div`
  display: flex;
  gap: var(--gap-16);
`;

const H4 = styled(Heading)`
  font-size: var(--text-h4);
  margin-bottom: var(--margin-80);
`;

const ShowcaseBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 470px;
`;

const Small = styled.small`
  margin-bottom: var(--margin-16);
  font-size: var(--text-small);
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--margin-16);

  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const Right = styled.div`
  max-width: 440px;
  display: flex;
  align-items: center;
`;

const CaptionText = styled.p`
  font-size: var(--text-body);
`;

const Circle = styled.div`
  padding: var(--padding-8);
  background-color: var(--color-secondary);
  border-radius: 1000px;
  transition: transform 300ms ease-in-out, filter 300ms ease-in-out;

  & svg {
    color: var(--color-white);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: scale(1.2);
      filter: brightness(90%);
    }
  }
`;

export default Showcase;
