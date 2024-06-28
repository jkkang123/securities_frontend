export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">{children}</div>
  );
}
