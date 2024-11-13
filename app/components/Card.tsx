import { PropsWithChildren } from "react";

type CardProps = {
  className?: string;
};

export default function Card({
  children,
  className,
}: PropsWithChildren<CardProps>) {
  return (
    <div className="m-4 m-r-2 bg-foreground rounded flex">
      <div
        className={
          "text-base border border-foreground rounded -translate-y-1 grow bg-background flex flex-col " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}
