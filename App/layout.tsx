
import "./globals.css";

export const metadata = {
  title: "ClientFlow",
  description: "Business Management Platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
