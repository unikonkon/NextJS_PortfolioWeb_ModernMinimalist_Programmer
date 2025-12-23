import type { Metadata } from "next";
import { Fira_Code, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suthep Jantawee | Full Stack Developer",
  description: "Full Stack Developer with 3+ years of experience in web development. Passionate about building intuitive interfaces, exploring modern frameworks, and leveraging AI tools.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Suthep Jantawee" }],
  openGraph: {
    title: "Suthep Jantawee | Full Stack Developer",
    description: "Full Stack Developer with 3+ years of experience in web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${firaCode.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
