"use client";

import styled from "styled-components";
import { NAVLINKS } from "../../../data";
import Link from "../Link/Link";

function Links() {
  const PRIMARY_LINK = NAVLINKS.slice(0, 3);
  const SECONDARY_LINK = NAVLINKS.slice(3);

  return (
    <>
      <Wrapper>
        {PRIMARY_LINK.map((link) => (
          <Link
            href={`/${link.replace(" ", "_").toLowerCase()}`}
            key={crypto.randomUUID()}
          >
            {link}
          </Link>
        ))}
      </Wrapper>
      <Filler />
      <Wrapper>
        {SECONDARY_LINK.map((link) => (
          <Link
            href={`/${link.replace(" ", "_").toLowerCase()}`}
            key={crypto.randomUUID()}
          >
            {link}
          </Link>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul`
  display: flex;

  gap: 16px;

  & li {
    font-size: 16px;
  }
`;

const Filler = styled.div`
  flex: 1 0 150px;
`;

export default Links;
