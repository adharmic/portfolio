import { PropsWithChildren } from "react";
import Card from "./Card";

type ExpandableCardProps = {};

export default function ExpandableCard({
  children,
}: PropsWithChildren<ExpandableCardProps>) {
  return <Card></Card>;
}
