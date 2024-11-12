import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="w-full h-16 flex justify-end items-center border-b-2 border-foreground bg-background">
        <Button text="Home" />
        <Button text="Portfolio" />
        <Button text="Contact" />
      </div>
      <div className="flex grow">
        <div className="m-4 m-r-2 bg-foreground rounded flex">
          <div className="border border-foreground rounded -translate-y-1 grow bg-background flex flex-col max-w-64">
            <div className="text-lg bg-accent p-1 border-b-2 border-foreground">
              <h1 className="underline font-bold">Adithya Ajith</h1>
              <h2 className="text-xs">Artist / Engineer</h2>
            </div>
            <div className="text-xs p-1 flex flex-col h-full ">
              <div className="w-32 h-32 rounded-full bg-foreground self-center mt-2">
                <div className="-translate-y-3 border border-foreground w-32 h-32 rounded-full bg-white self-center mt-2"></div>
              </div>
              <div className="m-4">
                I'm Adithya - a <b>Cybersecurity Masters' Student</b> and{" "}
                <b>full-time software engineer</b>. When I'm not working, I'm
                also a multi-media artist, designer, and general tinkerer.
              </div>
              <div className="self-center mt-auto">
                <Button text="Résumé" />
              </div>
            </div>
          </div>
        </div>
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
