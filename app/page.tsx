import Image from "next/image";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex grow">
        <Card className="max-w-80" >
          <div className="text-xl bg-accent p-1 border-b-2 border-foreground">
            <h1 className="underline font-bold">Adithya Ajith</h1>
            <h2 className="text-base">Artist / Engineer</h2>
          </div>
          <div className="text-xs p-1 flex flex-col h-full ">
            <div className="w-52 h-52 rounded-full bg-foreground self-center mt-2">
              <div className="-translate-y-3 border border-foreground w-52 h-52 rounded-full bg-white self-center mt-2">
                <Image
                  src="/avatar.svg"
                  alt="Vector self portrait"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div className="m-4 text-base">
              I'm Adithya - a <b>Cybersecurity Masters' Student</b> and{" "}
              <b>full-time software engineer</b>. When I'm not working, I'm
              also a multi-media artist, designer, and general tinkerer.
            </div>
            <div className="self-center mt-auto">
              <Button text="Résumé" />
            </div>
          </div>
        </Card>
        <div className="grow mr-4 my-4 bg-foreground rounded flex">
          <div className="border border-foreground rounded -translate-y-1 grow bg-background">
            <div className="border-b-2 border-foreground">
              <h1 className="p-2 font-bold bg-secondary">Toolbox</h1>
            </div>
            <div className="p-2">
              These are the software, languages, and other resources I use for
              my personal and professional skill development.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
