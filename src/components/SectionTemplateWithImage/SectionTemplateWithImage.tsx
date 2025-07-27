"use client";

import Heading, { type headingProps } from "@/ui/Heading";
import styled from "styled-components";

type SectionTemplateWithImageProps = {
  children: React.ReactNode;
  heading: string;
  description: string;
  level: headingProps;
};

function SectionTemplateWithImage({
  heading,
  description,
  level,
  children,
}: SectionTemplateWithImageProps) {
  return (
    <>
      <TextWrapper>
        <H2 level={level}>{heading}</H2>
        <Description>{description}</Description>
      </TextWrapper>
      {children}
    </>
  );
}

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

export default SectionTemplateWithImage;
