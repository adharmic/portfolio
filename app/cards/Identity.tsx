import Card from "../components/Card";
import Button from "../components/buttons/Button";
import Avatar from "../components/Avatar";
import Heading from "../components/Heading";

export default function Identity() {
  return (
    <Card className="max-w-80 2xl:max-w-2xl">
      <Heading className="bg-accent">
        <div className="text-xl 2xl:text-6xl p-1 border-b-2 border-foreground 2xl:p-4">
          <h1 className="underline font-bold">Adithya Ajith</h1>
          <h2 className="text-base 2xl:text-2xl">Artist / Engineer</h2>
        </div>
      </Heading>
      <div className="text-xs p-1 flex flex-col h-full items-center justify-evenly ">
        <Avatar />
        <div className="m-4 text-base 2xl:text-4xl">
          I am Adithya - a <b>Cybersecurity Masters Student</b> and{" "}
          <b>full-time software engineer</b>. When I&apos;m not working,
          I&apos;m also a multi-media artist, designer, and general tinkerer.
        </div>
        <div className="self-center">
          <Button color="accent">
            <h1 className="2xl:text-6xl">Résumé</h1>
          </Button>
        </div>
      </div>
    </Card>
  );
}
