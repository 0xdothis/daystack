"use client";

import styled from "styled-components";
import { LOGOS } from "../../../data";
import LogoList from "../LogoList";
import SectionTemplateWithImage from "../SectionTemplateWithImage";
import ContainerTemplate from "../ContainerTemplate";

function Growth() {
  return (
    <Wrapper>
      <ContainerTemplate>
        <SectionTemplateWithImage
          heading="Powering growth for amazing businesses"
          description="Paystack is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa."
          level="h2"
        >
          <LogoWrapper>
            {LOGOS.map((logo) => (
              <LogoList key={crypto.randomUUID()} logo={logo} />
            ))}
          </LogoWrapper>
        </SectionTemplateWithImage>
      </ContainerTemplate>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-blue-bg);
  color: var(--color-text);
  padding-top: var(--padding-96);
  padding-bottom: var(--padding-56);
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: repeat(6, minmax(120px, 1fr));
  gap: var(--gap-64);
  justify-content: center;
`;

export default Growth;
