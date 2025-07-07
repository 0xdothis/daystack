"use client";

import styled from "styled-components";

import Links from "../Links/Links";

function Navbar() {
  return (
    <Wrapper>
      <Links />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.75;
  padding: 0 16px;
`;

export default Navbar;
