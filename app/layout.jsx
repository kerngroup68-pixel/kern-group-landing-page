import "./globals.css";

export const metadata = {
  title: "Kern Group LLC | Independent Co-Living Housing",
  description:
    "Affordable shared living for independent adults in the Dallas-Fort Worth Area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
