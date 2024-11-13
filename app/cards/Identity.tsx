import Card from "../components/Card";
import Button from "../components/buttons/Button";
import Avatar from "../components/Avatar";

export default function Identity() {
  return (
    <Card className="max-w-80">
      <div className="text-xl bg-accent p-1 border-b-2 border-foreground">
        <h1 className="underline font-bold">Adithya Ajith</h1>
        <h2 className="text-base">Artist / Engineer</h2>
      </div>
      <div className="text-xs p-1 flex flex-col h-full ">
        <Avatar />
        <div className="m-4 text-base">
          I'm Adithya - a <b>Cybersecurity Masters' Student</b> and{" "}
          <b>full-time software engineer</b>. When I'm not working, I'm also a
          multi-media artist, designer, and general tinkerer.
        </div>
        <div className="self-center mt-auto">
          <Button color="accent" text="Résumé" />
        </div>
      </div>
    </Card>
  );
}
