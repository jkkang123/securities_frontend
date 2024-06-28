import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
}

export default function Card(props: CardProps) {
  const { children, title } = props;
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
