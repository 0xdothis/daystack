type HeadingProps = {
  children: React.ReactNode;
  level?: headingProps;
  delegated?: object;
};

export type headingProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

function Heading({ level = "h1", children, ...delegated }: HeadingProps) {
  const Component = level;

  if (!Component) {
    throw new Error("Please specify which heading ");
  }

  return <Component {...delegated}>{children}</Component>;
}

export default Heading;
