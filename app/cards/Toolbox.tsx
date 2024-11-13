import Button from "../components/buttons/Button";
import Minimize from "../components/buttons/Minimize";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Image from "next/image";

export default function Toolbox() {
  return (
    <Card>
      <Heading>
        <div className="p-2 font-bold bg-secondary flex items-center justify-between text-lg">
          <h1>Toolbox</h1>
          <Minimize />
        </div>
      </Heading>
      <div className="p-4 text-sm">
        These are the software, languages, and other resources I use for my
        personal and professional skill development.
      </div>
      <Card>
        <Heading className="bg-secondary p-1">Programming</Heading>
        <div className="flex items-center mt-2 justify-around">
          <Button color="secondary" className="w-12 h-12" rounded={true}>
            <Image src="/react.svg" alt="React" fill />
          </Button>
          <Button color="secondary" className="w-12 h-12" rounded={true}>
            <Image src="/typescript.svg" alt="TypeScript" fill />
          </Button>
          <Button color="secondary" className="w-12 h-12" rounded={true}>
            <Image src="/tailwind.svg" alt="Tailwind" fill />
          </Button>
          <Button color="secondary" className="w-12 h-12" rounded={true}>
            <img
              src="https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63065002cd563e1f8fcead3b_fdcad5ca.png"
              alt="C#"
            />
          </Button>
        </div>
      </Card>
    </Card>
  );
}
