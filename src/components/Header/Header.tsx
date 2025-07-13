"use client";

import styled from "styled-components";

import Navbar from "../Navbar";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import Flag from "../Flag";
import Logo from "../Logo";

import NIGERIA_FLAG from "../../../public/logos/flag_of_nigeria.svg";

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navbar />
      <CTAWrapper>
        <CTAButton>Create a New Account</CTAButton>
        <Flag src={NIGERIA_FLAG} alt="a flag of nigeria" />
      </CTAWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  max-width: 1800px;
  background-color: var(--color-green-10);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: var(--padding-24);
  padding-bottom: var(--padding-24);
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CTAButton = styled(UnstyledButton)`
  background-color: var(--color-primary);
  padding: 13px 18px;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-white);
  border-radius: 4px;
`;

export default Header;
