import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://technusoft.com";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Technusoft | Software, Web & Mobile Development", template: "%s | Technusoft" },
  description: "Technusoft builds custom software, websites and mobile apps for startups and enterprises.",
  openGraph: {
    title: "Technusoft | Enterprise Engineering",
    description: "Custom software, web and mobile development with high performance.",
    url: site,
    siteName: "Technusoft",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Hardware-accelerated ambient background blobs */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
            <div className="blob -left-[10vmax] -top-[12vmax] bg-accent2" />
            <div className="blob -right-[14vmax] top-[20vh] bg-accent [animation-delay:-8s]" />
            <div className="blob -bottom-[18vmax] left-[25vw] bg-accent3 opacity-35 [animation-delay:-14s]" />
          </div>
          {/* Ambient interactive cursor glow */}
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
