"use client";

import UnstyledButton from "@/components/UnstyledButton/UnstyledButton";
import Link from "next/link";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

function Button({ href, children }: ButtonProps) {
  if (href) {
    return <PrimaryLink href={href}>{children}</PrimaryLink>;
  }

  return <PrimaryButton>{children}</PrimaryButton>;
}

export default Button;

const PrimaryButton = styled(UnstyledButton)`
  background-color: var(--color-primary);
  padding: 13px 18px;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-white);
  border-radius: 4px;
  display: block;
`;

const PrimaryLink = styled(Link)`
  padding: 13px 18px;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-primary);
  text-decoration: none;
`;
