import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/sections/navbar";
import { CustomCursor } from "@/components/custom-cursor";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  metadataBase: new URL("https://santhoshkumar-lime.vercel.app"), // Your domain

  title: "Santhosh Kumar | Full-Stack Web3 Developer",
  description:
    "Premium Web3 development services - Building tomorrow's digital infrastructure with cutting-edge blockchain technology",
  keywords: [
    "Web3 Developer",
    "Blockchain",
    "Full Stack",
    "React",
    "Next.js",
    "Solidity",
  ],
  authors: [{ name: "Santhosh Kumar K" }],
  creator: "Santhosh Kumar K",
  openGraph: {
    title: "Santhosh Kumar | Full-Stack Web3 Developer",
    description:
      "Premium Web3 development services - Building tomorrow's digital infrastructure",
    url: "https://santhoshkumar.dev",
    siteName: "Santhosh Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosh Kumar | Full-Stack Web3 Developer",
    description:
      "Premium Web3 development services - Building tomorrow's digital infrastructure",
    creator: "@Santhosh0918_",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
