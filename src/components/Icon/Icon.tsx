"use client";

import React from "react";
import styled from "styled-components";

import { ChevronDown, Menu, X, ChevronRight, Play } from "lucide-react";

interface IconProps {
  id: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  delegated?: object;
}

interface WrapperProps {
  $strokeWidth?: number;
  $color?: string;
  $size?: number;
}

const icons = {
  menu: Menu,
  play: Play,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  close: X,
};

function Icon({ id, color, size, strokeWidth, ...delegated }: IconProps) {
  function isIconKey(key: string): key is keyof typeof icons {
    return key in icons;
  }
  let Component;

  if (isIconKey(id)) {
    Component = icons[id];
  }

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper $strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div<WrapperProps>`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.$strokeWidth !== undefined ? p.$strokeWidth + "px" : undefined};
  }
`;

export default Icon;
