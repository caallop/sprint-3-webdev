import "./globals.css";

export const metadata = {
  title: "Raluguva",
  description:
    "É como se os alertas da vida real ganhassem legendas visuais instantâneas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
