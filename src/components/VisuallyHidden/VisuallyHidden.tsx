"use client";

import React from "react";
import styled from "styled-components";

type VisuallyHiddenProps = {
  children: React.ReactNode;
  delegated?: object;
};

function VisuallyHidden({ children, ...delegated }: VisuallyHiddenProps) {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default VisuallyHidden;
