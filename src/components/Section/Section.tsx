"use client";

import styled from "styled-components";
import Image from "next/image";

import SectionTemplate from "../SectionTemplate";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import ListItem from "../ListItem/";
import Icon from "../Icon";

import posImg from "../../../public/pos.png";
import cardImg from "../../../public/card_stacked.png";
import robustImg from "../../../public/robust_suit.png";

function Section() {
  return (
    <Wrapper>
      <Container>
        <H2 level="h2">Simple, easy payments</H2>
        <Description>
          Building a business is hard. Getting paid shouldn&apos;t be
        </Description>
        <SectionTemplate direction="row-reverse">
          <TextWrapper>
            <H3 level="h3">
              Delight customers with a seamless payments experience
            </H3>
            <DescriptionText>
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate Paystack once and let your customers pay you
              however they want.
            </DescriptionText>
            <ListItem
              bulletin={[
                "Card",
                "Apple Pay",
                "Bank Account",
                "Visa QR",
                "Bank Transfer",
                "Mobile Money",
                "USSD",
                "POS (Coming soon)",
              ]}
              gridType="1fr 1fr"
              marginBottom="var(--margin-56) + var(--margin-40)"
              marginTop="var(--margin-56) "
            />
            <H3 level="h3">Enjoy phenomenal transaction success rates</H3>
            <DescriptionText>
              We automatically route payments through the most optimal channels,
              ensuring the highest transaction success rates in the market.
            </DescriptionText>
            <LinkWrapper>
              <IconWrapper>
                <Icon id="chevron-right" size={16} />
              </IconWrapper>
              <Link href="/learn">
                Find out how we achieve high success rates
              </Link>
            </LinkWrapper>
          </TextWrapper>
          <ImageWrapper>
            <Image src={posImg} alt="a hand holding a point on sale machine" />
          </ImageWrapper>
        </SectionTemplate>
        <SectionTemplate>
          <TextWrapper>
            <H3 level="h3">
              Build custom payments experiences with well- documented APIs
            </H3>
            <DescriptionText>
              Developers love our thorough, well-documented APIs that let you to
              build everything from simple weekend projects, to complex
              financial products serving hundreds of thousands of customers. If
              you can imagine it, you can build it with Paystack.
            </DescriptionText>
            <ListItem
              bulletin={[
                "Collect one-time and recurring payments from your app or website",
                "Make instant transfers",
                "Retrieve all your transaction and customer data",
                "Verify the identity of customers",
              ]}
              marginBottom="var(--margin-32)"
              marginTop="var(--margin-32)"
            />
            <LinkWrapper>
              <IconWrapper>
                <Icon id="chevron-right" size={16} />
              </IconWrapper>
              <Link href="/pricing">Paystack API Quickstart</Link>
            </LinkWrapper>
          </TextWrapper>
          <ImageWrapper>
            <Image
              src={cardImg}
              alt="bulks of automated teller machine cards"
            />
          </ImageWrapper>
        </SectionTemplate>
        <SectionTemplate direction="row-reverse">
          <TextWrapper>
            <H3 level="h3">
              Protect yourself and your customers with advanced fraud detection
            </H3>
            <DescriptionText>
              Paystack’s combination of automated and manual fraud systems
              protect you from fraudulent transactions and associated chargeback
              claims.
            </DescriptionText>
            <H3 level="h3">
              Detailed reporting for accounting, reconciliation, and audits
            </H3>
            <DescriptionText>
              Understand your customers’ purchase patterns and do easy
              reconciliations with a robust data Dashboard and easy exports.
            </DescriptionText>
          </TextWrapper>
          <ImageWrapper>
            <Image
              src={robustImg}
              alt="bulks of automated teller machine cards"
            />
          </ImageWrapper>
        </SectionTemplate>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: var(--color-text);
  background-color: var(--color-bg);
`;

const Container = styled(MaxWidthWrapper)`
  padding-top: var(--padding-72);
  padding-bottom: var(--padding-72);
`;

const H2 = styled(Heading)`
  font-size: var(--text-h2);
  color: currentColor;
  margin-bottom: var(--margin-8);
`;

const Description = styled.p`
  font-size: var(--text-description);
  color: currentColor;
  margin-bottom: calc(var(--margin-88) + var(--margin-16) - 4px);
`;

const H3 = styled(Heading)`
  font-size: var(--text-h3);
  color: currentColor;
  margin-bottom: var(--margin-16);
`;

const DescriptionText = styled.p`
  font-size: calc(var(--text-description) * 0.9);

  &:not(:has(ul)) {
    margin-bottom: var(--margin-64);
  }
`;

const TextWrapper = styled.div`
  max-width: 476px;
  margin-right: var(--margin-96);
`;

const Link = styled(Button)``;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  border: 2px solid var(--color-primary);
  border-radius: 200px;
  padding: 4px;
  cursor: pointer;

  & svg {
    color: var(--color-primary);
  }
`;

const ImageWrapper = styled.div`
  width: 509px;
  align-self: flex-end;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export default Section;
