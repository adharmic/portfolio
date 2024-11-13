import { PropsWithChildren } from "react";

type ButtonProps = {
  text?: string;
  rounded?: boolean;
  className?: string;
  color?: string;
};

export default function Button({
  text,
  children,
  rounded,
  className,
  color,
}: PropsWithChildren<ButtonProps>) {
  return (
    <div
      className={
        "m-2 text-foreground bg-foreground hover:cursor-pointer w-min-fit " +
        (rounded ? "rounded-full" : "rounded") +
        " " +
        className
      }
    >
      <div
        className={
          "p-1 border border-foreground block -translate-y-1 h-full active:translate-y-0 active:text-background active:border-t-2 hover:-translate-y-1.5 transition-all text-lg " +
          (rounded ? "rounded-full" : "rounded") +
          (color ? " bg-" + color : "")
        }
      >
        {text ? text : children}
      </div>
    </div>
  );
}
