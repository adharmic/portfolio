'use client'

import { PropsWithChildren, useEffect, useState } from "react";
import Minimize from "./buttons/Minimize";

type ExpandableCardProps = {
  heading: string;
  color: string;
  className: string;
};

export default function ExpandableCard({
  children,
  heading,
  color,
  className,
}: PropsWithChildren<ExpandableCardProps>) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])

  return (
    <div className={"flex flex-col " + className + (isOpen ? " h-full" : "")}>
      <div className={"p-2 flex items-center justify-between rounded-t 2xl:rounded-t-xl border border-foreground " + color + " " + className + (!isOpen ? " rounded 2xl:rounded-xl" : " rounded-t 2xl:rounded-t-xl")}>
        <h1 className="2xl:text-3xl">{heading}</h1>
        <Minimize callback={toggleOpen}>
        </Minimize>
      </div>
      <div
        className={
          "bg-foreground rounded flex 2xl:rounded-b-xl grow "
          + className
          + (isOpen ? "" : " hidden")
        }
      >
        <div
          className={
            "text-base border-t-2 border border-foreground rounded-b -translate-y-1 bg-background flex flex-col 2xl:rounded-b-xl grow " +
            className
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
