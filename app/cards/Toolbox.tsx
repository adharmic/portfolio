import Button from "../components/buttons/Button";
import Minimize from "../components/buttons/Minimize";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Image from "next/image";

export default function Toolbox() {
  return (
    <Card className="grow" windowProps="grow">
      <Heading className="bg-secondary">
        <div className="p-2 font-bold flex items-center justify-between text-lg 2xl:text-5xl">
          <h1>Toolbox</h1>
          <Minimize />
        </div>
      </Heading>
      <div className="p-4 text-sm 2xl:text-2xl">
        These are the software, languages, and other resources I use for my
        personal and professional skill development.
      </div>
      <Card>
        <Heading className="bg-secondary p-1 2xl:text-4xl">Programming</Heading>
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
        </div>
      </Card>
    </Card>
  );
}
