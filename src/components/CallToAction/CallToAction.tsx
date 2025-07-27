"use client";

import styled from "styled-components";

import Button from "@/ui/Button";
import ContainerTemplate from "../ContainerTemplate";
import Heading from "@/ui/Heading";
import { WEIGHTS } from "../../../constant";

function CallToAction() {
  return (
    <Wrapper>
      <ContainerTemplate>
        <Description>Try Paystack Now</Description>
        <ActionWrapper>
          <HeadingWrapper>
            <H2 level="h2">Start accepting payments in just 30 minutes</H2>
          </HeadingWrapper>
          <Button>Create a New Account</Button>
        </ActionWrapper>
      </ContainerTemplate>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-bg);
  color: var(--color-text);
  padding-top: var(--padding-72);
  padding-bottom: var(--padding-72);
`;

const Description = styled.p`
  font-size: var(--text-description);
  margin-bottom: var(--margin-32);
`;

const H2 = styled(Heading)`
  font-size: var(--text-h2);
  font-weight: ${WEIGHTS.medium};
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: var(--padding-48);
`;

const HeadingWrapper = styled.div`
  width: 638px;
`;

export default CallToAction;
