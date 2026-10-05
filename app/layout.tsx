import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://technusoft.com";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Technusoft | Software, Web & Mobile Development", template: "%s | Technusoft" },
  description: "Technusoft builds custom software, websites and mobile apps for startups and enterprises.",
  openGraph: { title: "Technusoft", description: "Custom software, web and mobile development.", url: site, siteName: "Technusoft", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
            <div className="blob -left-[10vmax] -top-[12vmax] bg-accent2" />
            <div className="blob -right-[14vmax] top-[20vh] bg-accent [animation-delay:-8s]" />
            <div className="blob -bottom-[18vmax] left-[25vw] bg-accent3 opacity-35 [animation-delay:-14s]" />
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
