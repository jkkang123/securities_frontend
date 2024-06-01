interface ItemProps {
  title: string;
  content: string;
}

export default function Item(props: ItemProps) {
  const { title, content } = props;
  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
      <p className="text-base font-medium">{content}</p>
    </div>
  );
}
