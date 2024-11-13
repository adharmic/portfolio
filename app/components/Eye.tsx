"use client";

import { useEffect, useRef, useState } from "react";

type EyeProps = {
  id?: string;
  left?: string;
  right?: string;
};

type Point = {
  x: number;
  y: number;
};

export default function Eye({ id, left, right }: EyeProps) {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const parentRef = useRef<HTMLDivElement>(null);

  const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parentRef.current) return;

      const parentRect = parentRef.current.getBoundingClientRect();

      const x = e.clientX - parentRect.left;
      const y = e.clientY - parentRect.top;

      const clampedX = clamp(x, 0, parentRect.width / 1.5);
      const clampedY = clamp(y, 0, parentRect.height / 1.5);

      setPosition({ x: clampedX, y: clampedY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      id={id}
      style={{
        width: "15%",
        height: "15%",
        position: "absolute",
        left: left ? left : "38%",
        top: right ? right : "42%",
      }}
    >
      <div
        className="relative bg-foreground w-2 h-2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
        }}
      ></div>
    </div>
  );
}
