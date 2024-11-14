import Button from "./buttons/Button";

export default function Navbar() {
  return (
    <div className="w-full h-16 2xl:h-24 flex justify-end items-center border-b-2 border-foreground bg-background">
      <Button color="accent">
        <h1 className="2xl:text-3xl">Home</h1>
      </Button>
      <Button color="accent">
        <h1 className="2xl:text-3xl">Portfolio</h1>
      </Button>
      <Button color="accent">
        <h1 className="2xl:text-3xl">Contact</h1>
      </Button>
    </div>
  );
}
