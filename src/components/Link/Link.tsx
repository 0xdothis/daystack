import styled from "styled-components";
import Anchor from "next/link";
import Icon from "../Icon";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: LinkProps) {
  return (
    <Wrapper>
      <StyledLink href={href}>
        {children}
        {(href === "/developers" ||
          href === "/support" ||
          href === "/why_paystack" ||
          href === "/learn") && <Icon id="chevron-down" size={16} />}
      </StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: max-content;
`;

const StyledLink = styled(Anchor)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
`;

export default Link;
