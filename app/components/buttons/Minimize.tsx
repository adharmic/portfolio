import Button from "./Button";

type MinimizeProps = {
  callback?: (e?: any) => void;
}

export default function Minimize({ callback }: MinimizeProps) {
  return (
    <Button callback={callback} rounded={true} color="white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=collapse_all"
      />
      <span className="material-symbols-outlined">collapse_all</span>{" "}
    </Button>
  );
}
