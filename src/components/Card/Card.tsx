"use client";

import Image from "next/image";
import styled from "styled-components";

import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Icon from "../Icon";

import { WEIGHTS } from "../../../constant";

export type CardProps = {
  imageUrl: string;
  alt: string;
  heading?: string;
  description: string;
  profilePhoto: string;
  link?: string;
  name: string;
  post?: string;
};

function Card({
  imageUrl,
  alt,
  heading,
  description,
  profilePhoto,
  link,
  name,
  post,
}: CardProps) {
  return (
    <Wrapper>
      <Content>
        <ImageWrapper>
          <Image src={imageUrl} alt={alt} />
        </ImageWrapper>
        {!!heading && <H4 level="h4">{heading}</H4>}
        <Description>{description}</Description>
      </Content>
      <FooterWrapper>
        {!!link && (
          <LinkWrapper>
            <IconWrapper>
              <Icon id="chevron-right" size={12} />
            </IconWrapper>
            <Link href="/learn">Learn more</Link>
          </LinkWrapper>
        )}
        {!!post && (
          <>
            <ProfileWrapper>
              <ProfilePhoto src={profilePhoto} alt={name} />
            </ProfileWrapper>
            <PostWrapper>
              <H6>{name}</H6>
              <Occupation>{post}</Occupation>
            </PostWrapper>
          </>
        )}
      </FooterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: var(--padding-32);
  background-color: var(--color-white);
  width: fit-content;
  border-radius: 4px;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Shawdow box */
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div``;

const ImageWrapper = styled.div`
  width: 97px;
  margin-bottom: var(--margin-48);

  & img {
    width: 100%;
    height: auto;
  }
`;

const H4 = styled(Heading)`
  font-size: var(--text-h4);
  max-width: 230px;
  width: fit-content;
  margin-bottom: var(--margin-16);
`;

const Description = styled.p`
  max-width: 330px;
  margin-bottom: var(--margin-40);
  width: max-content;
`;

const Link = styled(Button)``;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  border: 2px solid var(--color-primary);
  border-radius: 200px;
  padding: 4px;
  cursor: pointer;

  & svg {
    color: var(--color-primary);
  }
`;

const ProfileWrapper = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
  border-radius: 100px;

  & img {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 1;
  }

  /* Create a solid color behind the div for styling */
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -5px;
    left: -6px;
    right: 0;
    bottom: 0;
    border-radius: 100px;
    background-color: var(--color-blue-10);
  }
`;

const ProfilePhoto = styled(Image)`
  width: 100%;
  height: 100%;
`;

const H6 = styled(Heading)`
  font-size: calc(var(--text-h6) * 1.125);
  font-weight: ${WEIGHTS.bold};
`;

const Occupation = styled.p`
  font-size: var(--text-small);
  font-weight: 200;
`;

const PostWrapper = styled.div``;

const FooterWrapper = styled.div`
  display: flex;
  width: 303px;
  flex-direction: row;
  gap: var(--margin-16);
  align-items: center;
`;

export default Card;
