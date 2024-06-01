import { PropsWithChildren } from "react";

interface CardGridProps extends PropsWithChildren {}

export default function CardGrid({ children }: CardGridProps) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}
