import Button from "./Button";

export default function Navbar() {
  return (
    <div className="w-full h-16 flex justify-end items-center border-b-2 border-foreground bg-background">
      <Button text="Home" />
      <Button text="Portfolio" />
      <Button text="Contact" />
    </div>
  );
}
