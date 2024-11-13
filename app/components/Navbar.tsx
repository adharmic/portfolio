import Button from "./buttons/Button";

export default function Navbar() {
  return (
    <div className="w-full h-16 flex justify-end items-center border-b-2 border-foreground bg-background">
      <Button color="accent" text="Home" />
      <Button color="accent" text="Portfolio" />
      <Button color="accent" text="Contact" />
    </div>
  );
}
