"use client";

import styled from "styled-components";

type WrapperProps = {
  $direction?: string;
};

type SectionTemplateProps = {
  children: React.ReactNode;
  direction?: string;
};

function SectionTemplate({ direction, children }: SectionTemplateProps) {
  return <Wrapper $direction={direction}>{children}</Wrapper>;
}

const Wrapper = styled.div<WrapperProps>`
  color: var(--color-text);
  display: flex;
  flex-direction: ${(p) => p.$direction};
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--padding-72);
  padding-top: var(--padding-72);

  &:first-of-type {
    padding-bottom: var(--padding-96);
    padding-top: 0;
  }
`;

export default SectionTemplate;
