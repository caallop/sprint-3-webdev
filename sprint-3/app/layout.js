import "./globals.css";

export const metadata = {
  title: "QuoteKit - Win more deals",
  description: "Create, send, and track stunning proposals that close.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
