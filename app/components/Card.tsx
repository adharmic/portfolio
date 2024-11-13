import { PropsWithChildren } from "react";

type CardProps = {
  className?: string;
  windowProps?: string;
};

export default function Card({
  children,
  className,
  windowProps,
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={
        "m-4 m-r-2 bg-foreground rounded flex 2xl:rounded-xl " + windowProps
      }
    >
      <div
        className={
          "text-base border border-foreground rounded -translate-y-1 grow bg-background flex flex-col 2xl:rounded-xl " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}
