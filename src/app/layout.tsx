import CustomHeader from "@/components/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <CustomHeader />
        {children}</body>
    </html>
  );
}