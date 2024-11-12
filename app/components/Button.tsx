type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <div className="m-2 text-foreground rounded bg-foreground hover:cursor-pointer w-fit">
      <div
        className="p-1 border border-foreground block -translate-y-1 rounded bg-accent h-full
        active:translate-y-0 active:text-background active:border-t-2
        hover:-translate-y-1.5
        transition-all"
      >
        {text}
      </div>
    </div>
  );
}
