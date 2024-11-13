import { PropsWithChildren } from "react";

type HeadingProps = {
  className?: string;
};

export default function Heading({
  className,
  children,
}: PropsWithChildren<HeadingProps>) {
  return (
    <div className={"border-b-2 border-foreground " + className}>
      {children}
    </div>
  );
}
