import Image from "next/image";
import Eye from "./Eye";

export default function Avatar() {
  return (
    <div className="w-52 h-52 rounded-full bg-foreground self-center mt-2">
      <div className="-translate-y-3 border border-foreground w-52 h-52 rounded-full bg-white self-center mt-2">
        <Eye id="left" />
        <Eye left="63%" id="right" />
        <Image
          src="/avatar.svg"
          alt="Vector self portrait"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
