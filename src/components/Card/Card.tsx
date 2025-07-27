"use client";

import Image, { type StaticImageData } from "next/image";
import styled from "styled-components";

import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Icon from "../Icon";

import { WEIGHTS } from "../../../constant";

export type CardProps = {
  imageUrl: StaticImageData;
  alt: string;
  heading?: string;
  description: string;
  profilePhoto?: StaticImageData;
  link?: string;
  name?: string;
  post?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageWrapper?: string;
};

type ImageWidthProps = {
  $imageWidth: string;
  $imageHeight: string;
  $imageWrapper: string;
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
  imageWidth = "97px",
  imageHeight = "auto",
  imageWrapper = "var(--margin-48)",
}: CardProps) {
  return (
    <Trigger>
      <Wrapper>
        <Content>
          <ImageWrapper
            $imageWidth={imageWidth}
            $imageHeight={imageHeight}
            $imageWrapper={imageWrapper}
          >
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
                {!!profilePhoto && (
                  <ProfilePhoto src={profilePhoto} alt={name!} />
                )}
              </ProfileWrapper>
              <PostWrapper>
                <H6>{name}</H6>
                <Occupation>{post}</Occupation>
              </PostWrapper>
            </>
          )}
        </FooterWrapper>
      </Wrapper>
    </Trigger>
  );
}

const Wrapper = styled.article`
  padding: var(--padding-32);
  background-color: var(--color-white);
  width: fit-content;
  height: 100%;
  border-radius: 4px;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  will-change: transform;
  transition: transform 250ms ease-in-out;

  /* Shawdow box */
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
`;

const Trigger = styled.div`
  @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
    &:hover ${Wrapper} {
      transform: translateY(-20px) scale(1.05);
    }
  }
`;

const Content = styled.div``;

const ImageWrapper = styled.div<ImageWidthProps>`
  width: ${(p) => p.$imageWidth};
  height: ${(p) => p.$imageHeight};
  margin-bottom: ${(p) => p.$imageWrapper};

  & img {
    display: block;
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
  flex-shrink: 0;

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
    display: block;
  }
`;

const ProfilePhoto = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: 1;
`;

const H6 = styled(Heading)`
  font-size: calc(var(--text-h6) * 1.125);
  font-weight: ${WEIGHTS.bold};
`;

const Occupation = styled.p`
  font-size: 12px;
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
