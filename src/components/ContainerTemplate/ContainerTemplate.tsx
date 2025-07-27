"use client";

import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";

type ContainerTemplateProps = {
  children: React.ReactNode;
};

function ContainerTemplate({ children }: ContainerTemplateProps) {
  return <Container>{children}</Container>;
}

const Container = styled(MaxWidthWrapper)``;

export default ContainerTemplate;
