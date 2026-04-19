import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krystal Nguyen — Data Science, ML & AI",
  description:
    "AI Engineer & researcher at the intersection of industry, research and university. Python, ML/DL, NLP, LLMs, AWS.",
  openGraph: {
    title: "Krystal Nguyen — Data Science, ML & AI",
    description:
      "AI Engineer & researcher at the intersection of industry, research and university.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
