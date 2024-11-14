import Image from "next/image";
import Button from "../components/buttons/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";

export default function ProgrammingToolbox() {
  return (
    <Card className="w-full">
      <Heading className="bg-secondary p-1 2xl:text-3xl">Programming</Heading>
      <div className="flex items-center mt-2 justify-evenly">
        <Button
          color="secondary"
          className="w-11 aspect-square 2xl:w-24"
          rounded={true}
        >
          <Image src="/react.svg" alt="React" fill objectFit="cover" />
        </Button>
        <Button
          color="secondary"
          className="w-11 aspect-square 2xl:w-24"
          rounded={true}
        >
          <Image src="/typescript.svg" alt="TypeScript" fill />
        </Button>
        <Button
          color="secondary"
          className="w-11 aspect-square 2xl:w-24"
          rounded={true}
        >
          <Image src="/tailwind.svg" alt="Tailwind" fill />
        </Button>
        <Button
          color="secondary"
          className="w-11 aspect-square 2xl:w-24"
          rounded={true}
        >
          <Image src="/rust.svg" alt="Rust" fill />
        </Button>{" "}
        <Button
          color="secondary"
          className="w-11 aspect-square 2xl:w-24"
          rounded={true}
        >
          <Image src="/python.svg" alt="python" fill />
        </Button>
      </div>
    </Card>
  );
}
