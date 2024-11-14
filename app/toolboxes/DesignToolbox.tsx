import Image from "next/image";
import Button from "../components/buttons/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";

export default function DesignToolbox() {
  return (
    <Card className="w-full">
      <Heading className="bg-secondary p-1 2xl:text-3xl">Design</Heading>
      <div className="flex items-center mt-2 justify-evenly">
        <Button
          color="secondary"
          className="w-11 aspect-square 2xl:w-24"
          rounded={true}
        >
          <Image
            src="/photoshop.svg"
            alt="Photoshop"
            width={400}
            height={400}
          />
        </Button>
      </div>
    </Card>
  );
}
