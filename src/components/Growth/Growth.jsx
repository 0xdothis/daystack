"use client";
import Heading from "@/ui/Heading";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { LOGOS } from "../../../data";
import LogoList from "../LogoList";

function Growth() {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <H2 level="h2">Powering growth for amazing businesses</H2>
          <Description>
            Paystack is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
          </Description>
        </TextWrapper>
        <LogoWrapper>
          {LOGOS.map((logo) => (
            <LogoList key={crypto.randomUUID()} logo={logo} />
          ))}
        </LogoWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-blue-bg);
  color: var(--color-text);
  padding-top: var(--padding-96);
  padding-bottom: var(--padding-56);
`;

const Container = styled(MaxWidthWrapper)``;

const TextWrapper = styled.div`
  width: 702px;
  margin-bottom: var(--margin-64);
`;

const H2 = styled(Heading)`
  font-size: var(--text-h2);
  margin-bottom: var(--margin-16);
`;

const Description = styled.p`
  font-size: var(--text-description);
  width: 650px;
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: repeat(6, minmax(120px, 1fr));
  gap: var(--gap-64);
  justify-content: center;
`;

export default Growth;
